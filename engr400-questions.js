// ENGR 400 vize soru bankası. Kaynaklar: ENGR400_Vize_42_Soru_Dogrulanmis.json ve ENGR400_Lecture_1_5_25_Yeni_Vize_Sorusu.json
const engr400QuestionsData = 
[
  {
    "question": "Which one of the following is a characteristic of a profession?",
    "options": [
      "Extensive period of training",
      "Ethical standards",
      "Knowledge and skills vital to the well-being of society",
      "All of above"
    ],
    "answer": 3,
    "hint": "Mesleğin uzun eğitim, topluma faydalı uzmanlık ve etik standart özellikleri var; bu yüzden tümü.",
    "origin": "past_exam"
  },
  {
    "question": "Choose the correct statement about the profession.",
    "options": [
      "Profession does not require an extensive period of training",
      "Profession lacks a high degree of autonomy in the workplace",
      "No ethical standards are embedded into profession",
      "Profession possesses knowledge and skills vital to the well-being of society"
    ],
    "answer": 3,
    "hint": "Notlar uzun eğitim, mesleki özerklik ve etik standartları olumlu nitelikler sayar; yalnız D doğru.",
    "origin": "past_exam"
  },
  {
    "question": "Which one below is not among the aims of our course?",
    "options": [
      "To provide workplace standards in an explicit manner",
      "To help you to detect possible ethical problems in working life",
      "To help you to analyze ethical problems",
      "To create awareness of ethical issues"
    ],
    "answer": 0,
    "hint": "Dersin hedefleri farkındalık, etik sorunları tespit, analiz ve çözüm; işyeri standartlarını bizzat belirlemek değil.",
    "origin": "past_exam"
  },
  {
    "question": "Which occupation below is not a profession?",
    "options": [
      "Medical doctor",
      "Plumber",
      "School teacher",
      "Engineer"
    ],
    "answer": 1,
    "hint": "Notların profesyonel örnekleri doktor, öğretmen, mühendis vb.; tesisatçı sınavın meslek/profesyon kriterlerine göre istisna.",
    "origin": "past_exam"
  },
  {
    "question": "Ethical decisions can be made using",
    "options": [
      "Ethical codes",
      "Workplace standards",
      "Laws",
      "All of them"
    ],
    "answer": 3,
    "hint": "Etik karar için kod, yasa ve meslek standartlarının tümü kullanılabilir.",
    "origin": "past_exam"
  },
  {
    "question": "Why did we review the 20 greatest engineering achievements of the 20th century?",
    "options": [
      "To show that engineering designs may contain flaws",
      "To discuss the preamble of code of ethics practically",
      "To highlight the fact that most technologies come with double implications",
      "To give examples for moral values and for ethical considerations"
    ],
    "answer": 2,
    "hint": "Teknolojinin yararlarıyla birlikte etik/zararlı yan etkileri olabilir.",
    "origin": "past_exam"
  },
  {
    "question": "Choose the definition of the micro issue in the ethical context.",
    "options": [
      "A micro issue is an effect regarding the minimum number of people in the project",
      "A micro issue considers a global effect such as environmental concern",
      "A micro issue is a decision made by individuals in the design of the project",
      "None of above"
    ],
    "answer": 2,
    "hint": "Mikro konular bireylerin/şirketlerin proje tasarımındaki kararlarıdır.",
    "origin": "past_exam"
  },
  {
    "question": "Considering the design of SUV cars, which one cannot be regarded as a macro issue?",
    "options": [
      "Being stable/instable to rollovers",
      "Excessive air pollution",
      "Design of the tires",
      "Gas-guzzling"
    ],
    "answer": 2,
    "hint": "Lastik tasarımı mikro; devrilme güvenliği, çevre kirliliği, yakıt tüketimi makro.",
    "origin": "past_exam"
  },
  {
    "question": "Which one is not one of the reasons of moral problems that we discussed in the class?",
    "options": [
      "Incompetence",
      "Safety",
      "Silo-mentality",
      "Lack of vision"
    ],
    "answer": 1,
    "hint": "Vizyon eksikliği, yetersizlik ve silo mentality ahlaki sorun nedenleridir; safety bir etik değerdir, nedenler listesi değildir.",
    "origin": "past_exam"
  },
  {
    "question": "In class, we discussed the reasons for moral problems. Which one below is among those reasons?",
    "options": [
      "Silo mentality",
      "Code of ethics",
      "Cost of safety improvements",
      "None of them"
    ],
    "answer": 0,
    "hint": "Liste silo mentality kavramını açıkça içerir.",
    "origin": "past_exam"
  },
  {
    "question": "Complete the following sentence: “Ethical dilemmas occur when …”",
    "options": [
      "Micro issues are greater than macro issues",
      "Moral values are in conflict",
      "Ethical standards are satisfied",
      "None of above"
    ],
    "answer": 1,
    "hint": "Etik ikilem ahlaki gerekçelerin/değerlerin çatışmasıdır.",
    "origin": "past_exam"
  },
  {
    "question": "Which one is a moral value?",
    "options": [
      "Protection of the environment",
      "Public health",
      "Liability to the employer",
      "All of them"
    ],
    "answer": 3,
    "hint": "Çevreyi koruma, kamu sağlığı ve işverene sadakat ders bağlamında ahlaki yükümlülük/değerlerdir.",
    "origin": "past_exam"
  },
  {
    "question": "Which one of the following is a step in resolving ethical dilemmas?",
    "options": [
      "Moral clarity",
      "Conceptual clarity",
      "Being informed about the facts",
      "All of above"
    ],
    "answer": 3,
    "hint": "Moral clarity, conceptual clarity ve bilgi/facts edinme çözüm adımlarıdır.",
    "origin": "past_exam"
  },
  {
    "question": "Ethical issues in the professional life can be handled by applying …",
    "options": [
      "Code of ethics",
      "The law",
      "The standards of the profession",
      "All of above"
    ],
    "answer": 3,
    "hint": "Etik sorunlarda kod, hukuk ve meslek standartları birlikte kullanılır.",
    "origin": "past_exam"
  },
  {
    "question": "What is the message of the case Ford Pinto in the ethical context?",
    "options": [
      "Macro issues like design of a car is crucial",
      "Sometimes law may lag behind, abiding the law is not enough always",
      "Many cars are gas guzzling and open to rollovers",
      "Often managers can be under huge pressure"
    ],
    "answer": 1,
    "hint": "Ford Pinto üzerinden yasal uyumun her zaman etik bakımdan yeterli olmadığı vurgulanır; D de olayda doğru olabilen ama ana mesaj olmayan bilgi içerir.",
    "origin": "past_exam"
  },
  {
    "question": "What is the main theme of the Citicorp example for our course?",
    "options": [
      "Professional and corporate responsibility",
      "Creativity",
      "Complexity in architecture",
      "None of them"
    ],
    "answer": 0,
    "hint": "Citicorp vakası mesleki ve kurumsal sorumluluk için ele alınır.",
    "origin": "past_exam"
  },
  {
    "question": "What is the ethical dilemma of LeMessurier in the Citicorp case?",
    "options": [
      "Responsibility to various financial constituencies (company, co-workers etc.) vs. safety of the people",
      "Safety vs. efficiency",
      "Avoiding deceptive acts vs. welfare of the public",
      "Welfare of the public vs. environment"
    ],
    "answer": 0,
    "hint": "Güvenlik sorumluluğu ile mali taraflara/itibara ilişkin sorumlulukların çatışmasıdır.",
    "origin": "past_exam"
  },
  {
    "question": "Which one below states the ethical dilemma of the engineer in the Gilbane Gold case?",
    "options": [
      "Protection of the environment vs. corporate finances",
      "Pursuing engineer’s own career vs. public safety",
      "Liability to the employer vs. safety",
      "All of them"
    ],
    "answer": 3,
    "hint": "Çevre/kamu sağlığı, işverenin itibarı/maliyeti ve kişisel kariyer gibi birden çok değer çatışır.",
    "origin": "past_exam"
  },
  {
    "question": "Mark the relevant code for the Challenger disaster.",
    "options": [
      "Engineers shall perform services only in the areas of their competence",
      "Engineers shall associate only with reputable persons or organizations",
      "If engineers’ judgment is overruled under circumstances that endanger life or property, they shall notify their employer or client and such other authority as may be appropriate",
      "Engineers shall reject bribery in all its forms"
    ],
    "answer": 2,
    "hint": "Hayatı tehlikeye atan durumda mühendis kararı bastırılırsa işverene ve uygun makamlara bildirim gerekir; Challenger ile bağlanır.",
    "origin": "past_exam"
  },
  {
    "question": "Which one is not a section of NSPE code of ethics?",
    "options": [
      "Fundamental Canons",
      "Rules of Practice",
      "Moral Statements",
      "Professional Obligations"
    ],
    "answer": 2,
    "hint": "NSPE dört bölümden oluşur; Moral Statements diye bir bölüm yoktur.",
    "origin": "past_exam"
  },
  {
    "question": "Which one is not a use of code of ethics?",
    "options": [
      "They serve as reference for ethical decision making",
      "They are commitments to the ethical standards",
      "They serve as a supporting document for engineers in their action to ethical problems",
      "They are replacement for laws for ethical conduct"
    ],
    "answer": 3,
    "hint": "Etik kodları yasaların yerine geçmez.",
    "origin": "past_exam"
  },
  {
    "question": "Which one below is not among the fundamental canons?",
    "options": [
      "Engineers shall perform services only in areas of their competence",
      "Engineers shall not be influenced in their professional duties by conflicting interests",
      "Engineers shall issue public statements only in an objective and truthful manner",
      "Engineers shall act for each employer or client as faithful agents or trustees"
    ],
    "answer": 1,
    "hint": "Çıkar çatışmasından etkilenmeme yükümlülüğü Fundamental Canons altı maddesinde değil, Professional Obligations bölümündedir.",
    "origin": "past_exam"
  },
  {
    "question": "What is the function of the Preamble in the NSPE code of ethics?",
    "options": [
      "It defines ground principles of the profession",
      "It contains practical information about the application of the codes",
      "It serves as an introduction referring to moral values",
      "None of above"
    ],
    "answer": 2,
    "hint": "Preamble etik değerlerle ilişki kuran giriş bölümüdür.",
    "origin": "past_exam"
  },
  {
    "question": "What is the function of the fundamental canons of the NSPE code of ethics?",
    "options": [
      "They serve as an introduction referring to the moral values",
      "They define ground principles of the profession",
      "They contain practical information about the application of the codes",
      "All of above"
    ],
    "answer": 1,
    "hint": "Fundamental Canons temel ilkeleri ve yükümlülükleri belirler.",
    "origin": "past_exam"
  },
  {
    "question": "What is the content of the Rules of Practice of the NSPE code of ethics?",
    "options": [
      "Fundamental and principal obligations",
      "Guidelines describing the standards of the profession",
      "Items containing the existing laws related to engineering",
      "Practical information for application of canons"
    ],
    "answer": 3,
    "hint": "Rules of Practice: Fundamental Canons uygulamasına dönük kurallar; Professional Obligations ile karıştırılmamalı.",
    "origin": "past_exam"
  },
  {
    "question": "What is the content of the Professional Obligations of NSPE code of ethics?",
    "options": [
      "Fundamental principles and obligations",
      "Guidelines describing the standards of the profession",
      "Items containing the existing laws related to engineering",
      "Practical information for application of canons"
    ],
    "answer": 1,
    "hint": "Professional Obligations mesleki davranış standartlarına ilişkin yönergeler içerir.",
    "origin": "past_exam"
  },
  {
    "question": "Which one of the following has the highest priority in NSPE code of ethics?",
    "options": [
      "Reputation of the profession",
      "Employer’s well-being",
      "Safety of the public",
      "None of above"
    ],
    "answer": 2,
    "hint": "Birinci ve en öncelikli ilke kamu sağlığı/güvenliği/refahıdır.",
    "origin": "past_exam"
  },
  {
    "question": "What design defect was central to the Ford Pinto ethical controversy described in the lectures?",
    "options": [
      "A faulty navigation computer",
      "A fuel-tank location that could lead to an explosion during a collision",
      "An aircraft wing that cracked at low temperatures",
      "An unstable elevator in a skyscraper"
    ],
    "answer": 1,
    "hint": "Ford Pinto yakıt deposunun yerleşimi çarpışmada patlama riski doğuruyordu.",
    "origin": "ai_authored"
  },
  {
    "question": "Which ability is best described as moral imagination?",
    "options": [
      "Memorizing existing regulations",
      "Developing alternative and creative solutions to practical ethical difficulties",
      "Ignoring other stakeholders",
      "Accepting a manager’s first proposal without question"
    ],
    "answer": 1,
    "hint": "Moral imagination alternatif ve yaratıcı etik çözümler arama becerisidir.",
    "origin": "ai_authored"
  },
  {
    "question": "A child playing with matches starts a fire, while the parents are morally answerable for leaving the child unattended. Which type of responsibility describes the child causing the fire?",
    "options": [
      "Legal responsibility",
      "Job responsibility",
      "Causal responsibility",
      "Professional obligation"
    ],
    "answer": 2,
    "hint": "Yangına doğrudan neden olmak causal responsibility, ahlaki sorumluluk ayrı olabilir.",
    "origin": "ai_authored"
  },
  {
    "question": "When an engineer is required to explain and justify why they acted in a certain way, which aspect of responsibility is involved?",
    "options": [
      "Autonomy",
      "Accountability",
      "Monopoly",
      "Efficiency"
    ],
    "answer": 1,
    "hint": "Accountability, davranışı gerekçelendirme ve açıklama yükümlülüğüdür.",
    "origin": "ai_authored"
  },
  {
    "question": "According to the lecture notes, which statement about a corporation is correct?",
    "options": [
      "Corporations cannot be morally evaluated",
      "Only individual employees can be accountable",
      "Corporations also have obligations and can be accountable or blameworthy",
      "Corporate responsibility concerns profit only"
    ],
    "answer": 2,
    "hint": "Şirketlerin de yükümlülükleri, hesap verebilirliği ve övülebilir/kınanabilir eylemleri vardır.",
    "origin": "ai_authored"
  },
  {
    "question": "What problem resulted from detachable pull tabs on early aluminum beverage cans?",
    "options": [
      "They improved recycling automatically",
      "They caused litter and potential harm to people, fish, and other animals",
      "They made aluminum unusable for drinks",
      "They eliminated the need for any safety testing"
    ],
    "answer": 1,
    "hint": "Çıkarılan açma halkaları çevre kirliliği ve canlılar için yaralanma riski oluşturdu.",
    "origin": "ai_authored"
  },
  {
    "question": "Before treating an ethical conflict as a choice between obeying a supervisor and immediately reporting externally, which step calls for considering realistic alternatives?",
    "options": [
      "Being informed about the options",
      "Professional monopoly",
      "Cost accounting only",
      "Maintaining silence"
    ],
    "answer": 0,
    "hint": "Sadece iki seçeneğe sıkışmadan gerçekçi çözüm alternatiflerini incelemek gerekir.",
    "origin": "ai_authored"
  },
  {
    "question": "In NSPE BER Case 93-7, what was the principal ethical concern about signing a secrecy agreement that allowed disclosure only if ordered by a court?",
    "options": [
      "It could prevent disclosure needed to protect public safety",
      "It would automatically raise the engineer’s salary",
      "It would eliminate engineering documentation",
      "It would require the engineer to change employers"
    ],
    "answer": 0,
    "hint": "BER 93-7 gizlilik ile kamu güvenliği bildirim görevinin çatışmasıdır.",
    "origin": "ai_authored"
  },
  {
    "question": "What technical issue concerned Morton Thiokol engineers before the Challenger launch?",
    "options": [
      "A crack in the aluminum can opener",
      "Loss of O-ring resilience in low temperatures",
      "A faulty airport cost-benefit report",
      "An overloaded bridge elevator"
    ],
    "answer": 1,
    "hint": "Challenger O-ringlerinin düşük sıcaklıktaki esnekliği sorunluydu.",
    "origin": "ai_authored"
  },
  {
    "question": "What should an engineer do if their judgment is overruled in circumstances endangering life or property, according to the cited NSPE rule?",
    "options": [
      "Remain silent to protect the employer",
      "Delete the unsafe design from all records",
      "Notify the employer or client and other appropriate authority",
      "Approve the work because the decision was made by management"
    ],
    "answer": 2,
    "hint": "Tehlike durumunda itiraz/uyarı uygun mercilere iletilmelidir.",
    "origin": "ai_authored"
  },
  {
    "question": "Which statement correctly reflects the NSPE Rules of Practice about signing technical documents?",
    "options": [
      "An engineer may sign any drawing on request",
      "Only qualified engineers should sign the technical parts for which they are competent and responsible",
      "A manager’s approval replaces technical qualification",
      "Signatures have no ethical significance"
    ],
    "answer": 1,
    "hint": "Yetkinlik dışı teknik planı imzalamamak gerekir; proje koordinasyonunun özel koşulları vardır.",
    "origin": "ai_authored"
  },
  {
    "question": "What must engineers do with known or potential conflicts of interest that could affect their judgment?",
    "options": [
      "Ignore them when no one asks",
      "Accept undisclosed payments from all parties",
      "Disclose those conflicts to the relevant parties",
      "Delegate the issue to an advertising team"
    ],
    "answer": 2,
    "hint": "Bilinen/olası çıkar çatışmaları ilgili taraflara açıklanmalıdır.",
    "origin": "ai_authored"
  },
  {
    "question": "In NSPE BER Case 96-4, why was additional software testing an ethical issue?",
    "options": [
      "The software was solely for entertainment",
      "Testing would prevent every project from being completed",
      "Draft standards and possible public-safety risks conflicted with cost and schedule pressure",
      "The engineer had no relevant safety responsibilities"
    ],
    "answer": 2,
    "hint": "BER 96-4 yeni standartlara uymama olasılığı ve ilave testlerin maliyet/zaman baskısını konu alır.",
    "origin": "ai_authored"
  },
  {
    "question": "What ethical concern arises from Intel initially denying or minimizing the processor flaw?",
    "options": [
      "Insufficient patent filings only",
      "An obligation to build skyscrapers",
      "Lack of truthful communication and corporate accountability",
      "A failure of airport cost-benefit analysis"
    ],
    "answer": 2,
    "hint": "Intel başlangıçta kusuru reddetti ve sonra önemsiz gösterdi; doğruluk ve kurumsal sorumluluk söz konusu.",
    "origin": "ai_authored"
  },
  {
    "question": "How should an engineer balance client confidentiality and an overriding threat to public safety under the lecture’s NSPE discussion?",
    "options": [
      "Keep confidentiality absolute even when life is endangered",
      "Reveal every company secret publicly immediately",
      "Ignore the profession’s ethics code",
      "Respect confidentiality while following applicable legal and ethical duties to report serious threats"
    ],
    "answer": 3,
    "hint": "Gizlilik genel kuraldır fakat yaşam/güvenlik riski ve bildirime ilişkin etik/hukuki istisnalar göz önünde tutulur.",
    "origin": "ai_authored"
  },
  {
    "question": "Which one below is not among the main goals of teaching engineering ethics?",
    "options": [
      "To provide knowledge of professional codes and standards",
      "To increase awareness of ethical issues",
      "To guarantee that no engineer will ever make an unethical decision",
      "To provide training in ethical decision-making"
    ],
    "answer": 2,
    "hint": "Ders notu eğitim hedefleri arasında bilgi, farkındalık, karar verme ve etik davranış motivasyonunu sayıyor; kesin garanti vermiyor.",
    "origin": "ai_authored"
  },
  {
    "question": "Which characteristic of a profession is illustrated by control over professional titles and licensing for entry into practice?",
    "options": [
      "The absence of ethical regulation",
      "Control over admission to the profession",
      "Freedom from professional education",
      "The lack of specialized knowledge"
    ],
    "answer": 1,
    "hint": "Mesleğin özellikleri arasında meslek unvanı ve lisanslama yoluyla mesleğe kabulün kontrol edilmesi bulunuyor.",
    "origin": "ai_authored"
  },
  {
    "question": "According to the definition of a profession discussed by M. Davis, which statement is correct?",
    "options": [
      "Members of a profession voluntarily serve a moral ideal beyond what law and markets alone require",
      "A profession is defined only by the income of a single worker",
      "Professional activities have no public purpose",
      "An occupation becomes a profession whenever it is legally permitted"
    ],
    "answer": 0,
    "hint": "M. Davis tanımı bir topluluk, gönüllü katılım ve yasanın ya da piyasanın ötesinde ahlaki bir ideale hizmet etmeyi vurguluyor.",
    "origin": "ai_authored"
  },
  {
    "question": "Choose the correct statement about law and engineering ethics.",
    "options": [
      "If a design satisfies the law, there can be no ethical problem",
      "Engineers may ignore laws whenever they disagree with them",
      "Engineering ethics is entirely independent of public safety",
      "Technological developments can move faster than laws, so legal compliance alone may be insufficient"
    ],
    "answer": 3,
    "hint": "Ders notu yasa ile etiğin aynı olmadığını ve teknolojik gelişmelerin yasaların önüne geçebileceğini vurguluyor.",
    "origin": "ai_authored"
  },
  {
    "question": "In the chicken-coop design example, which design consideration illustrates a moral value?",
    "options": [
      "Choosing the cheapest material regardless of safety",
      "Ignoring the needs of local users",
      "Providing a safe floor for barefoot villagers and humane conditions for animals",
      "Maximizing egg production without any other consideration"
    ],
    "answer": 2,
    "hint": "Tavuk kümesi örneğinde insanların güvenliği, hayvanlara saygı ve çevre koruması tasarımın etik parçalarıdır.",
    "origin": "ai_authored"
  },
  {
    "question": "Which one is a micro issue in the Ford Explorer and Bridgestone/Firestone tire example?",
    "options": [
      "The general environmental impact of SUVs",
      "Society-wide concerns about fuel consumption",
      "The general debate about SUV rollover risks",
      "A flawed tire design and poor quality control by a manufacturer"
    ],
    "answer": 3,
    "hint": "Notta kusurlu lastik tasarımı ve üretici kalite kontrolü micro; SUV kirliliği ve genel rollover sorunu macro olarak ayrılıyor.",
    "origin": "ai_authored"
  },
  {
    "question": "Which statement best describes groupthink as a reason for moral problems?",
    "options": [
      "A tendency to accept group decisions at the expense of critical thinking",
      "The inability of two departments to exchange information",
      "A technical error caused only by insufficient mathematics",
      "A legal requirement to reach unanimous decisions"
    ],
    "answer": 0,
    "hint": "Groupthink eleştirel düşünme pahasına grubun kararlarına uyumu ifade eder; departmanlar arası iletişim kopukluğu silo mentality’dir.",
    "origin": "ai_authored"
  },
  {
    "question": "In the flashlight-bulb example, which conflict creates an ethical dilemma?",
    "options": [
      "Environmental protection versus technical competence",
      "The firm’s interest in repeat sales versus product quality and public welfare",
      "Engineers versus safety inspectors over legal permits",
      "Public safety versus the confidentiality of medical records"
    ],
    "answer": 1,
    "hint": "Daha uzun ömürlü ampulü kullanmamak şirketin tekrar satış çıkarına yararken ürün kalitesi, tüketici refahı ve çevreyle çatışıyor.",
    "origin": "ai_authored"
  },
  {
    "question": "In the Citicorp Tower case, what important construction detail did LeMessurier discover after consulting his colleagues?",
    "options": [
      "The joints were not welded as he had assumed",
      "The building had no structural braces",
      "The building’s columns were placed only at the corners",
      "All wind-related calculations had already been independently verified"
    ],
    "answer": 0,
    "hint": "LeMessurier bağlantıların kaynaklı olduğunu sanıyordu; meslektaşlarından kaynaklı olmadıklarını öğrendi.",
    "origin": "ai_authored"
  },
  {
    "question": "Which statement about moral choices and ethical dilemmas is consistent with the lecture?",
    "options": [
      "Every moral choice necessarily involves conflicting values",
      "Ethical dilemmas are special cases of moral choices, while many moral choices are straightforward",
      "Ethical dilemmas are decisions without moral values",
      "Moral choices are always resolved by obeying a supervisor"
    ],
    "answer": 1,
    "hint": "Lecture 3, etik ikilemlerin moral choices’ın özel bir türü olduğunu, birçok ahlaki seçimin açık ve basit olduğunu söylüyor.",
    "origin": "ai_authored"
  },
  {
    "question": "In resolving an ethical dilemma, which step asks an engineer to clarify what being a faithful employee actually means?",
    "options": [
      "Moral imagination",
      "Being informed about the options",
      "Conceptual clarity",
      "Causal responsibility"
    ],
    "answer": 2,
    "hint": "Conceptual clarity kavramları netleştirmedir; üstüne itaatin mi yoksa şirketin uzun vadeli çıkarının mı sadakat anlamına geldiğini sorgular.",
    "origin": "ai_authored"
  },
  {
    "question": "A chemical engineer checks and rechecks whether a company’s discharge violates pollution limits. Which step is being applied?",
    "options": [
      "Professional autonomy",
      "Moral coherence",
      "Being informed about the options",
      "Being informed about the facts"
    ],
    "answer": 3,
    "hint": "Kimyasal atık miktarlarını ve hukuka uygunluğunu doğrulamak, olgular hakkında yeterli bilgi edinme adımıdır.",
    "origin": "ai_authored"
  },
  {
    "question": "What design improvement resolved the problem of discarded pull tabs on aluminum beverage cans?",
    "options": [
      "A stay-attached opener that remains on the can",
      "A return to heavier steel cans without openings",
      "Removal of every opening mechanism",
      "A requirement that consumers bring separate openers forever"
    ],
    "answer": 0,
    "hint": "Ders notu çözümün kutuya bağlı kalan açma mekanizması olduğunu ve bunun tasarımsal/etik ilerleme sağladığını belirtiyor.",
    "origin": "ai_authored"
  },
  {
    "question": "In the steps for resolving ethical dilemmas, what does being well-reasoned require?",
    "options": [
      "Following the option that benefits the employer most",
      "Making a carefully justified judgment using relevant moral reasons and facts",
      "Choosing the first solution that appears legal",
      "Leaving every moral question entirely to the public authorities"
    ],
    "answer": 1,
    "hint": "Well-reasoned aşaması tüm ilgili ahlaki gerekçeler ve olgular üzerinden dikkatle gerekçelendirilmiş karar vermektir.",
    "origin": "ai_authored"
  },
  {
    "question": "Which one below is not a value emphasized in the NSPE Preamble?",
    "options": [
      "Honesty",
      "Impartiality",
      "Maximizing an employer’s private profit regardless of public welfare",
      "Fairness"
    ],
    "answer": 2,
    "hint": "NSPE Preamble dürüstlük, tarafsızlık, adalet ve kamu yararını vurgular; her koşulda özel kârı maksimize etmeyi değil.",
    "origin": "ai_authored"
  },
  {
    "question": "Which one below is explicitly among the Fundamental Canons of the NSPE Code of Ethics?",
    "options": [
      "Engineers shall always accept the lowest possible fee",
      "Engineers shall place company finances above public safety",
      "Engineers shall avoid reporting technical errors",
      "Engineers shall avoid deceptive acts"
    ],
    "answer": 3,
    "hint": "“Avoid deceptive acts” altı temel ilkeden biridir; diğer şıklar kanona aykırıdır.",
    "origin": "ai_authored"
  },
  {
    "question": "What is the main purpose of the NSPE Board of Ethical Review (BER) examples discussed in the course?",
    "options": [
      "To illustrate the application of ethical codes to concrete professional situations",
      "To replace the NSPE Code of Ethics with criminal law",
      "To provide engineering calculations for commercial projects",
      "To eliminate the need for moral reasoning"
    ],
    "answer": 0,
    "hint": "BER vakaları NSPE kurallarının somut, gerçek olaylara dayanan örnek durumlara nasıl uygulandığını gösteriyor.",
    "origin": "ai_authored"
  },
  {
    "question": "An inspector tags unsafe construction equipment, but a manager orders removal of the tag to avoid delay. Which action is most consistent with the ethical discussion?",
    "options": [
      "Remove the tag because the manager has financial responsibility",
      "Maintain the safety objection and act according to the applicable professional code",
      "Ignore the safety problem unless an accident occurs",
      "Allow continued operation solely because the defect appears minor"
    ],
    "answer": 1,
    "hint": "Güvenlik etik açıdan önceliklidir; yönetici talebi tehlikeli ekipmanı göz ardı etmeyi haklı çıkarmaz.",
    "origin": "ai_authored"
  },
  {
    "question": "Which factor contributed to the reversal of the no-launch recommendation before the Challenger disaster?",
    "options": [
      "The complete replacement of all O-rings before launch",
      "A new test proving that cold temperatures could not affect the O-rings",
      "Management pressure related to schedules, costs, and future contracts",
      "A decision by R. Boisjoly to withdraw all safety concerns"
    ],
    "answer": 2,
    "hint": "NASA ve Morton Thiokol yönetimindeki takvim, maliyet ve sözleşme baskısı güvenlik uyarılarının önüne geçti.",
    "origin": "ai_authored"
  },
  {
    "question": "Under the NSPE Rules of Practice, when may an engineer coordinate and sign documents for an entire project?",
    "options": [
      "Whenever the engineer has management approval, regardless of competence",
      "Only if the engineer personally designed every technical segment",
      "Even when no qualified engineer reviews specialized segments",
      "When the technical segments are prepared and signed or sealed by appropriately qualified engineers"
    ],
    "answer": 3,
    "hint": "Tüm projenin koordinasyonu üstlenilebilir; ancak her teknik bölüm kendi yetkin mühendisi tarafından hazırlanıp imzalanmalıdır.",
    "origin": "ai_authored"
  },
  {
    "question": "According to the NSPE Rules of Practice, public technical opinions should be based on which of the following?",
    "options": [
      "Knowledge of the facts and competence in the subject matter",
      "The employer’s preferred marketing message only",
      "The popularity of the engineer making the statement",
      "Opinions supplied by interested parties without disclosure"
    ],
    "answer": 0,
    "hint": "Mühendis kamuya teknik görüş açıklarken olguları bilmeli, ilgili teknik alanda yetkin olmalı ve gerektiğinde çıkarları açıklamalıdır.",
    "origin": "ai_authored"
  },
  {
    "question": "According to the NSPE Professional Obligations, what should engineers do when they discover errors in their own work?",
    "options": [
      "Conceal the errors to protect the reputation of the employer",
      "Acknowledge the errors and avoid distorting or altering the facts",
      "Blame another department before investigating the facts",
      "Wait until the errors become public knowledge"
    ],
    "answer": 1,
    "hint": "Professional Obligations bölümünde hataları kabul etmek ve gerçekleri çarpıtmamak açıkça yer alıyor.",
    "origin": "ai_authored"
  },
  {
    "question": "Which professional obligation is related to protecting the environment for future generations?",
    "options": [
      "Maximizing short-term sales",
      "Avoiding all contact with the public",
      "Adhering to principles of sustainable development",
      "Transferring every ethical decision to the employer"
    ],
    "answer": 2,
    "hint": "Mesleki yükümlülüklerde gelecek nesiller için çevrenin korunmasına yönelik sustainable development ilkeleri öneriliyor.",
    "origin": "ai_authored"
  },
  {
    "question": "Which statement is consistent with the NSPE Professional Obligations concerning engineering work?",
    "options": [
      "An engineer may always copy a client’s design without permission",
      "Credit for an invention always belongs to the employer’s marketing department",
      "Engineering work created by colleagues may be presented as one’s own",
      "Engineers should give credit where it is due and respect the proprietary interests of others"
    ],
    "answer": 3,
    "hint": "NSPE III.9 mesleki emeğe hak ettiği itibarı vermeyi ve fikri/mülkiyet haklarına saygıyı öngörüyor.",
    "origin": "ai_authored"
  },
  {
    "question": "In BER Case 96-4, what should Engineer A recommend concerning software that may fail upcoming safety standards?",
    "options": [
      "Report the safety risks honestly and recommend additional testing, despite the possible delay and cost",
      "Approve deployment immediately because the current standards are satisfied",
      "Hide the new draft standards until the project is completed",
      "Make technical safety findings depend entirely on the company’s short-term financial interests"
    ],
    "answer": 0,
    "hint": "Notta mühendisin riskleri ve yeni standartları dürüstçe bildirmesi, ek testleri önermesi, finansal kararları yönetime bırakması bekleniyor.",
    "origin": "ai_authored"
  }
]
;
