const myQuestions = [
    {
        question: "In 'Squid Game', what is the number of the main protagonist, Seong Gi-hun?",
        answers: ["001", "218", "456", "067"],
        correctIndex: 2
    },
    {
        question: "Which 2019 drama features a South Korean heiress accidentally paragliding into North Korea?",
        answers: ["Crash Landing on You", "Descendants of the Sun", "The King: Eternal Monarch", "Vagabond"],
        correctIndex: 0
    },
    {
        question: "What is the name of the 'Grim Reaper' in the drama 'Guardian: The Lonely and Great God' (Goblin)?",
        answers: ["Gong Yoo", "Lee Dong-wook", "Kim Shin", "Wang Yeo"],
        correctIndex: 3
    },
    {
        question: "In 'Strong Woman Do Bong-soon', what is Bong-soon's special power?",
        answers: ["Invisibility", "Super Strength", "Time Travel", "Mind Reading"],
        correctIndex: 1
    },
    {
        question: "Which actor played the lead role in 'Itaewon Class'?",
        answers: ["Park Seo-joon", "Lee Min-ho", "Song Joong-ki", "Ji Chang-wook"],
        correctIndex: 0
    },
    {
        question: "What is the title of the drama about a high-class neighborhood where parents are obsessed with university entrance exams?",
        answers: ["Penthouse", "SKY Castle", "The World of the Married", "Green Mothers' Club"],
        correctIndex: 1
    },
    {
        question: "In 'Vincenzo', what is the lead character's profession in Italy?",
        answers: ["Chef", "Opera Singer", "Mafia Consigliere", "Detective"],
        correctIndex: 2
    },
    {
        question: "Which drama is set in the fictional kingdom of 'Daeho' and involves soul-shifting magic?",
        answers: ["Alchemy of Souls", "Kingdom", "Arthdal Chronicles", "The Moon Embracing the Sun"],
        correctIndex: 0
    },
    {
        question: "What food is famously associated with the drama 'Weightlifting Fairy Kim Bok-joo'?",
        answers: ["Bibimbap", "Fried Chicken", "Pizza", "Tteokbokki"],
        correctIndex: 1
    },
    {
        question: "In 'Business Proposal', what is Shin Ha-ri's fake name when she meets Kang Tae-moo on the blind date?",
        answers: ["Jin Young-seo", "Geum Hui", "Rachel", "Samantha"],
        correctIndex: 1
    },
    {
        question: "Which drama series features three different seasons set in the '1997', '1994', and '1988' time periods?",
        answers: ["Hospital Playlist", "Reply Series", "Signal", "Twenty-Five Twenty-One"],
        correctIndex: 1
    },
    {
        question: "What is the name of the hotel for ghosts managed by Jang Man-wol?",
        answers: ["Hotel Del Luna", "The Blue House", "Hotel King", "Mystic Pop-up Bar"],
        correctIndex: 0
    },
    {
        question: "In 'Extraordinary Attorney Woo', what animal is Woo Young-woo obsessed with?",
        answers: ["Cats", "Whales", "Elephants", "Dolphins"],
        correctIndex: 1
    },
    {
        question: "Which actor is known for the famous 'umbrella scene' in the drama 'Temptation of Wolves' (and parodied in many others)?",
        answers: ["Kang Dong-won", "Lee Jung-jae", "Hyun Bin", "Cha Eun-woo"],
        correctIndex: 0
    },
    {
        question: "In 'Our Beloved Summer', what was the original project that brought Choi Ung and Kook Yeon-su together?",
        answers: ["A Cooking Show", "A High School Documentary", "A Science Project", "A Music Video"],
        correctIndex: 1
    },
    {
        question: "Which drama involves a screenwriter who finds herself inside the world of a historical webtoon?",
        answers: ["W: Two Worlds", "Mr. Queen", "Extra-ordinary You", "Lost Romance"],
        correctIndex: 0
    },
    {
        question: "What is the profession of the main characters in 'Hospital Playlist'?",
        answers: ["Lawyers", "Doctors/Professors", "Musicians", "Police Officers"],
        correctIndex: 1
    },
    {
        question: "In 'The Glory', what board game does Moon Dong-eun use to get closer to her enemies?",
        answers: ["Chess", "Checkers", "Go (Baduk)", "Mahjong"],
        correctIndex: 2
    },
    {
        question: "Which 2016 drama follows special forces soldiers and doctors working in a war-torn country?",
        answers: ["Hwa-rang", "Healer", "Descendants of the Sun", "Iris"],
        correctIndex: 2
    },
    {
        question: "In 'True Beauty', what is Lim Ju-kyung's secret skill?",
        answers: ["Cooking", "Makeup Artistry", "Singing", "Gaming"],
        correctIndex: 1
    }
];

let currentQuestionIndex = 0;
let userScore = 0;

const startScreen = document.getElementById('start-container');
const quizScreen = document.getElementById('quiz-container');
const resultScreen = document.getElementById('result-container');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const feedbackArea = document.getElementById('feedback-area');
const nextBtn = document.getElementById('btn-next');


function startQuiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    startScreen.classList.add('display-none');
    resultScreen.classList.add('display-none');
    quizScreen.classList.remove('display-none');
    
    loadQuestion();
}

function loadQuestion() {
    feedbackArea.innerText = "";
    nextBtn.classList.add('display-none');
    optionsList.innerHTML = "";
    
    const currentData = myQuestions[currentQuestionIndex];
    
    questionText.innerText = currentData.question;
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1} of ${myQuestions.length}`;
    
    currentData.answers.forEach((text, index) => {
        const button = document.createElement('button');
        button.innerText = text;
        button.classList.add('option-btn');
        
        button.addEventListener('click', () => handleAnswerClick(index, button));
        
        optionsList.appendChild(button);
    });
}

function handleAnswerClick(selectedIndex, clickedButton) {
    const correctIndex = myQuestions[currentQuestionIndex].correctIndex;
    
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === correctIndex) {
        userScore++;
        clickedButton.classList.add('correct');
        feedbackArea.innerText = "Correct! Well done.";
    } else {
        clickedButton.classList.add('wrong');
        feedbackArea.innerText = "Oops! That's not right.";
        allButtons[correctIndex].classList.add('correct');
    }
    
    nextBtn.classList.remove('display-none');
}

function goToNext() {
    currentQuestionIndex++;

    if (currentQuestionIndex < myQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add('display-none');
    resultScreen.classList.remove('display-none');
    document.getElementById('score-text').innerText = `You scored ${userScore} out of ${myQuestions.length}!`;
}

document.getElementById('btn-start').addEventListener('click', startQuiz);
document.getElementById('btn-next').addEventListener('click', goToNext);
document.getElementById('btn-restart').addEventListener('click', startQuiz);


