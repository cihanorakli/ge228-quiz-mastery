// Quiz Mastery Logic - Cihan Oraklı Hayratı
let questions = []; 
let queue = []; 
let totalQuestionsCount = 0;
let totalWrongAnswers = 0;

// Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const wrongCounterEl = document.getElementById('wrong-counter');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const nextBtn = document.getElementById('next-btn');
let lastAnswerCorrect = false;

// Initial Load
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', () => location.reload());
nextBtn.addEventListener('click', nextQuestion);

function startQuiz() {
    // Load ALL 109 questions from questions.js (questionsData)
    questions = [...questionsData];
    queue = [...questions];
    shuffleArray(queue);
    
    totalQuestionsCount = questions.length;
    totalWrongAnswers = 0;
    
    updateUI();
    showScreen('quiz-screen');
    loadQuestion();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function loadQuestion() {
    if (queue.length === 0) {
        finishQuiz();
        return;
    }

    // Hide next button for new question
    nextBtn.style.display = 'none';

    const currentQ = queue[0];
    questionText.innerText = currentQ.question;
    optionsContainer.innerHTML = '';
    
    currentQ.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option;
        btn.addEventListener('click', () => handleAnswer(index, btn));
        optionsContainer.appendChild(btn);
    });

    updateProgress();
}

function handleAnswer(selectedIndex, clickedBtn) {
    const currentQ = queue[0];
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    
    // Disable all buttons and prevent further clicks
    optionButtons.forEach(btn => btn.classList.add('disabled', 'no-hover'));

    if (selectedIndex === currentQ.answer) {
        // Correct Answer
        clickedBtn.classList.add('correct');
        lastAnswerCorrect = true;
    } else {
        // Wrong Answer
        clickedBtn.classList.add('wrong');
        totalWrongAnswers++;
        updateUI();
        
        // Highlight correct option
        optionButtons[currentQ.answer].classList.add('correct');
        lastAnswerCorrect = false;
    }

    // Show next button instead of automatic transition
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    if (lastAnswerCorrect) {
        queue.shift();
    } else {
        // Move question to the end of the queue (spaced repetition)
        const missedQ = queue.shift();
        queue.push(missedQ);
    }

    if (queue.length > 0) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function updateProgress() {
    const remainingCount = queue.length;
    const completedCount = totalQuestionsCount - remainingCount;
    const progressPercent = (completedCount / totalQuestionsCount) * 100;
    
    progressBar.style.width = `${progressPercent}%`;
    progressText.innerText = `${completedCount} / ${totalQuestionsCount}`;
}

function updateUI() {
    wrongCounterEl.innerText = `Yanlış: ${totalWrongAnswers}`;
}

function finishQuiz() {
    document.getElementById('final-total').innerText = totalQuestionsCount;
    document.getElementById('final-wrong').innerText = totalWrongAnswers;
    showScreen('result-screen');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
