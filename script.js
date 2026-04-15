// Quiz Mastery Logic - Cihan Oraklı Hayratı
let allBatches = [];
let currentBatchIndex = 0;
let queue = []; 
let totalQuestionsCount = 0;
let totalWrongAnswers = 0;

let batchCorrectCount = 0;
let lastAnswerCorrect = false;
let currentQuestionAttempted = false; // Tracks if current question was already missed

// Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const batchSummaryScreen = document.getElementById('batch-summary-screen');
const resultScreen = document.getElementById('result-screen');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const wrongCounterEl = document.getElementById('wrong-counter');
const correctCounterEl = document.getElementById('correct-counter');
const optionsContainer = document.getElementById('options-container');
const questionText = document.getElementById('question-text');
const nextBtn = document.getElementById('next-btn');

// Batch Elements
const batchTitle = document.getElementById('batch-title');
const batchPercent = document.getElementById('batch-percent');
const nextBatchBtn = document.getElementById('next-batch-btn');

// Initial Load
document.querySelectorAll('.btn-category, .btn-primary[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        const chapter = btn.getAttribute('data-chapter');
        startQuiz(mode, chapter);
    });
});
document.getElementById('restart-btn').addEventListener('click', () => location.reload());
document.getElementById('next-batch-btn').addEventListener('click', startNextBatch);
nextBtn.addEventListener('click', nextQuestion);

function startQuiz(mode, chapterName = null) {
    let filtered = [];
    let batchSize = 20;

    if (mode === 'chapter') {
        filtered = questionsData.filter(q => q.chapter === chapterName);
        batchSize = filtered.length; 
    } else {
        // Mixed mode
        filtered = [...questionsData];
        batchSize = 40;
    }

    shuffleArray(filtered);
    
    // Divide into batches
    allBatches = [];
    for (let i = 0; i < filtered.length; i += batchSize) {
        allBatches.push(filtered.slice(i, i + batchSize));
    }
    
    totalQuestionsCount = filtered.length;
    totalWrongAnswers = 0;
    totalCorrectAnswers = 0;
    currentBatchIndex = 0;
    
    startBatch(0);
}

function startBatch(index) {
    currentBatchIndex = index;
    queue = [...allBatches[index]];
    // Reset batch stats
    batchCorrectCount = 0;
    
    // Shuffle the batch queue
    shuffleArray(queue);
    
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
        showBatchSummary();
        return;
    }

    nextBtn.style.display = 'none';
    const currentQ = queue[0];
    
    // Track if this is a repeat question
    if (!currentQ.hasOwnProperty('missedInBatch')) {
        currentQ.missedInBatch = false;
    }
    
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
    
    optionButtons.forEach(btn => btn.classList.add('disabled', 'no-hover'));

    if (selectedIndex === currentQ.answer) {
        clickedBtn.classList.add('correct');
        lastAnswerCorrect = true;
        // If it was never missed in this batch, count as a "first-time" success for the score
        if (!currentQ.missedInBatch) {
            batchCorrectCount++;
        }
    } else {
        clickedBtn.classList.add('wrong');
        totalWrongAnswers++;
        currentQ.missedInBatch = true; // Mark as missed
        updateUI();
        
        optionButtons[currentQ.answer].classList.add('correct');
        lastAnswerCorrect = false;
    }

    nextBtn.style.display = 'block';
}

function nextQuestion() {
    if (lastAnswerCorrect) {
        queue.shift();
        totalCorrectAnswers++;
        updateUI();
    } else {
        const missedQ = queue.shift();
        queue.push(missedQ);
    }

    if (queue.length > 0) {
        loadQuestion();
    } else {
        showBatchSummary();
    }
}

function showBatchSummary() {
    const batchSize = allBatches[currentBatchIndex].length;
    const percent = Math.round((batchCorrectCount / batchSize) * 100);
    
    batchTitle.innerText = `Bölüm ${currentBatchIndex + 1} Tamamlandı`;
    batchPercent.innerText = `${percent}%`;
    
    // If it's the last batch, change button text
    if (currentBatchIndex === allBatches.length - 1) {
        nextBatchBtn.innerText = "Final Sonuçlarını Gör";
    } else {
        nextBatchBtn.innerText = "Sıradaki Bölüme Geç";
    }
    
    showScreen('batch-summary-screen');
}

function startNextBatch() {
    if (currentBatchIndex < allBatches.length - 1) {
        startBatch(currentBatchIndex + 1);
    } else {
        finishQuiz();
    }
}

function updateProgress() {
    const batchSize = allBatches[currentBatchIndex].length;
    const completedInBatch = batchSize - queue.length;
    
    const progressPercent = (completedInBatch / batchSize) * 100;
    
    progressBar.style.width = `${progressPercent}%`;
    progressText.innerText = `${completedInBatch} / ${batchSize}`;
}

function updateUI() {
    correctCounterEl.innerText = `Doğru: ${totalCorrectAnswers}`;
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
