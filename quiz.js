const questions = [
    {
        question: "Która ryba jest drapieżnikiem?",
        answers: ["Karp", "Szczupak", "Leszcz", "Lin"],
        correct: "Szczupak"
    },
    {
        question: "Która ryba ma czerwone płetwy?",
        answers: ["Płoć", "Sum", "Karp", "Szczupak"],
        correct: "Płoć"
    },
    {
        question: "Która ryba może osiągać bardzo duże rozmiary?",
        answers: ["Sum", "Okoń", "Płoć", "Lin"],
        correct: "Sum"
    },
    {
        question: "Która ryba często bierze na kukurydzę?",
        answers: ["Karp", "Szczupak", "Sandacz", "Okoń"],
        correct: "Karp"
    },
    {
        question: "Która ryba ma ostre zęby?",
        answers: ["Lin", "Leszcz", "Szczupak", "Karp"],
        correct: "Szczupak"
    },
    {
        question: "Która ryba ma charakterystyczne paski?",
        answers: ["Okoń", "Karp", "Sum", "Lin"],
        correct: "Okoń"
    },
    {
        question: "Która ryba ma wąsy?",
        answers: ["Okoń", "Sum", "Płoć", "Leszcz"],
        correct: "Sum"
    },
    {
        question: "Która ryba jest popularna w wędkarstwie gruntowym?",
        answers: ["Leszcz", "Szczupak", "Okoń", "Sandacz"],
        correct: "Leszcz"
    },
    {
        question: "Która ryba jest popularna w spinningu?",
        answers: ["Karp", "Szczupak", "Leszcz", "Lin"],
        correct: "Szczupak"
    },
    {
        question: "Która ryba często żyje przy dnie?",
        answers: ["Karp", "Płoć", "Ukleja", "Wzdręga"],
        correct: "Karp"
    },
    {
        question: "Na jaką przynętę często łowi się szczupaka?",
        answers: ["Guma spinningowa", "Kukurydza", "Chleb", "Ciasto"],
        correct: "Guma spinningowa"
    },
    {
        question: "Do czego służy podbierak?",
        answers: ["Do podebrania ryby", "Do rzucania", "Do mierzenia głębokości", "Do wiązania żyłki"],
        correct: "Do podebrania ryby"
    },
    {
        question: "Co pokazuje spławik?",
        answers: ["Branie", "Temperaturę", "Wiek ryby", "Długość żyłki"],
        correct: "Branie"
    },
    {
        question: "Która ryba ma szerokie ciało?",
        answers: ["Leszcz", "Szczupak", "Sum", "Okoń"],
        correct: "Leszcz"
    },
    {
        question: "Która ryba ma śluzowatą skórę?",
        answers: ["Lin", "Szczupak", "Sandacz", "Okoń"],
        correct: "Lin"
    },
    {
        question: "Która ryba ma charakterystyczne żółte oczy?",
        answers: ["Sandacz", "Karp", "Leszcz", "Lin"],
        correct: "Sandacz"
    },
    {
        question: "Która ryba ma kolce na płetwie grzbietowej?",
        answers: ["Okoń", "Karp", "Lin", "Sum"],
        correct: "Okoń"
    },
    {
        question: "Która ryba jest rybą spokojnego żeru?",
        answers: ["Karp", "Szczupak", "Sandacz", "Okoń"],
        correct: "Karp"
    },
    {
        question: "Która ryba poluje na inne ryby?",
        answers: ["Szczupak", "Karp", "Leszcz", "Lin"],
        correct: "Szczupak"
    },
    {
        question: "Czym często nęci się karpie?",
        answers: ["Kukurydzą", "Błystką", "Twisterem", "Woblerem"],
        correct: "Kukurydzą"
    },
    {
        question: "Co to jest wobler?",
        answers: ["Sztuczna przynęta", "Rodzaj haczyka", "Żyłka", "Spławik"],
        correct: "Sztuczna przynęta"
    },
    {
        question: "Co to jest twister?",
        answers: ["Gumowa przynęta", "Rodzaj kołowrotka", "Żyłka", "Podpórka"],
        correct: "Gumowa przynęta"
    },
    {
        question: "Do czego służy kołowrotek?",
        answers: ["Do nawijania żyłki", "Do ważenia ryby", "Do nęcenia", "Do mierzenia głębokości"],
        correct: "Do nawijania żyłki"
    },
    {
        question: "Do czego służy haczyk?",
        answers: ["Do zacięcia ryby", "Do mierzenia ryby", "Do nęcenia", "Do trzymania wędki"],
        correct: "Do zacięcia ryby"
    },
    {
        question: "Co to jest żyłka?",
        answers: ["Linka do połowu", "Rodzaj przynęty", "Część spławika", "Rodzaj haczyka"],
        correct: "Linka do połowu"
    },
    {
        question: "Która przynęta jest sztuczna?",
        answers: ["Wobler", "Robak", "Kukurydza", "Chleb"],
        correct: "Wobler"
    },
    {
        question: "Która przynęta jest naturalna?",
        answers: ["Robak", "Wobler", "Błystka", "Guma"],
        correct: "Robak"
    },
    {
        question: "Do czego służy spławik?",
        answers: ["Sygnalizuje branie", "Przecina żyłkę", "Waży rybę", "Nęci ryby"],
        correct: "Sygnalizuje branie"
    },
    {
        question: "Która ryba często żyje w wodach stojących?",
        answers: ["Karp", "Łosoś", "Pstrąg", "Troć"],
        correct: "Karp"
    },
    {
        question: "Która ryba jest aktywna także nocą?",
        answers: ["Sum", "Karp", "Leszcz", "Lin"],
        correct: "Sum"
    },
    {
        question: "Która ryba ma wydłużone ciało?",
        answers: ["Szczupak", "Leszcz", "Karp", "Płoć"],
        correct: "Szczupak"
    },
    {
        question: "Która ryba jest często łowiona na robaki?",
        answers: ["Leszcz", "Szczupak", "Sandacz", "Sum"],
        correct: "Leszcz"
    },
    {
        question: "Która ryba może być łowiona na czerwonego robaka?",
        answers: ["Lin", "Szczupak", "Sandacz", "Sum"],
        correct: "Lin"
    },
    {
        question: "Która ryba często występuje w płytkich zatokach?",
        answers: ["Lin", "Sum", "Sandacz", "Szczupak"],
        correct: "Lin"
    },
    {
        question: "Która ryba jest popularnym drapieżnikiem w jeziorach?",
        answers: ["Szczupak", "Karp", "Lin", "Leszcz"],
        correct: "Szczupak"
    },
    {
        question: "Która ryba może polować w toni wodnej?",
        answers: ["Sandacz", "Karp", "Lin", "Leszcz"],
        correct: "Sandacz"
    },
    {
        question: "Która ryba ma duże łuski?",
        answers: ["Karp", "Sum", "Szczupak", "Sandacz"],
        correct: "Karp"
    },
    {
        question: "Która ryba może mieć złociste ubarwienie?",
        answers: ["Lin", "Szczupak", "Sandacz", "Sum"],
        correct: "Lin"
    },
    {
        question: "Co należy zrobić po złowieniu ryby?",
        answers: ["Bezpiecznie ją podebrać", "Rzucić ją na ziemię", "Zostawić na brzegu", "Kopać ją"],
        correct: "Bezpiecznie ją podebrać"
    },
    {
        question: "Co pomaga chronić rybę podczas wypuszczania?",
        answers: ["Mata do ryb", "Kamienie", "Piasek", "Beton"],
        correct: "Mata do ryb"
    },
    {
        question: "Co warto zrobić przed rozpoczęciem łowienia?",
        answers: ["Sprawdzić przepisy", "Zniszczyć sprzęt", "Wyrzucić przynęty", "Schować wędkę"],
        correct: "Sprawdzić przepisy"
    },
    {
        question: "Co oznacza skrót RAPR?",
        answers: ["Regulamin Amatorskiego Połowu Ryb", "Rodzaj przynęty", "Rodzaj wędki", "Rejestr Aktywnych Ryb"],
        correct: "Regulamin Amatorskiego Połowu Ryb"
    },
    {
        question: "Co warto mieć podczas łowienia?",
        answers: ["Podbierak", "Telewizor", "Głośnik", "Deskorolkę"],
        correct: "Podbierak"
    },
    {
        question: "Która metoda wykorzystuje spławik?",
        answers: ["Metoda spławikowa", "Spinning", "Muchowa", "Surfcasting"],
        correct: "Metoda spławikowa"
    },
    {
        question: "Która metoda wykorzystuje sztuczne przynęty?",
        answers: ["Spinning", "Spławikowa", "Gruntowa", "Podlodowa"],
        correct: "Spinning"
    },
    {
        question: "Co to jest branie?",
        answers: ["Zainteresowanie przynętą przez rybę", "Rodzaj haczyka", "Rodzaj wędki", "Nazwa ryby"],
        correct: "Zainteresowanie przynętą przez rybę"
    },
    {
        question: "Co robi wędkarz podczas holu?",
        answers: ["Kontroluje rybę na wędce", "Nęci inne ryby", "Zmienia jezioro", "Odkłada wędkę"],
        correct: "Kontroluje rybę na wędce"
    },
    {
        question: "Co oznacza wypuszczenie ryby?",
        answers: ["Oddanie jej do wody", "Zabranie jej do domu", "Sprzedanie jej", "Zakopanie jej"],
        correct: "Oddanie jej do wody"
    },
    {
        question: "Która ryba jest drapieżnikiem i poluje głównie o zmierzchu?",
        answers: ["Sandacz", "Karp", "Lin", "Leszcz"],
        correct: "Sandacz"
    },
    {
        question: "Co służy do przechowywania złowionych ryb w wodzie?",
        answers: ["Siatka na ryby", "Wobler", "Spławik", "Podpórka"],
        correct: "Siatka na ryby"
    }
];

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("nextButton");
const resultElement = document.getElementById("result");
const progressElement = document.getElementById("progress");
const restartButton = document.getElementById("restartButton");
const nicknameBox = document.getElementById("nicknameBox");
const nicknameInput = document.getElementById("nickname");
const saveScoreButton = document.getElementById("saveScoreButton");
const leaderboardElement = document.getElementById("leaderboard");
function createQuiz() {
    // Losujemy kolejność wszystkich 48 pytań
    quizQuestions = [...questions].sort(() => Math.random() - 0.5);
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];

    questionElement.textContent = question.question;

    progressElement.textContent =
        "Pytanie " + (currentQuestion + 1) +
        " z " + quizQuestions.length;

    answersElement.innerHTML = "";
    resultElement.textContent = "";
    nextButton.disabled = true;

    question.answers.forEach(function(answer) {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = answer;

        button.addEventListener("click", function() {
            checkAnswer(answer);
        });

        answersElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    const correctAnswer = quizQuestions[currentQuestion].correct;
    const buttons = answersElement.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        }

        if (
            button.textContent === answer &&
            answer !== correctAnswer
        ) {
            button.classList.add("wrong");
        }
    });

    if (answer === correctAnswer) {
        score++;
        resultElement.textContent = "✅ Dobrze!";
    } else {
        resultElement.textContent =
            "❌ Źle! Poprawna odpowiedź: " + correctAnswer;
    }

    nextButton.disabled = false;
}

nextButton.addEventListener("click", function() {
    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        questionElement.textContent = "🎉 Quiz zakończony!";
        answersElement.innerHTML = "";

        nextButton.style.display = "none";
        restartButton.style.display = "inline-block";

        progressElement.textContent = "Koniec quizu";

        resultElement.textContent =
            "Twój wynik: " + score + "/" + quizQuestions.length;
    }
    nicknameBox.style.display = "block";
nicknameInput.value = "";
});

restartButton.addEventListener("click", function() {
    currentQuestion = 0;
    score = 0;

    nextButton.style.display = "inline-block";
    nextButton.disabled = true;

    restartButton.style.display = "none";

    createQuiz();
    showQuestion();
});

createQuiz();
showQuestion();
saveScoreButton.addEventListener("click", function() {
    localStorage.setItem("quizScores", JSON.stringify(scores));
    const nickname = nicknameInput.value.trim();

    if (nickname === "") {
        alert("Podaj swój nickname!");
        return;
    }

    const scores = JSON.parse(localStorage.getItem("quizScores")) || [];

    scores.push({
        nickname: nickname,
        score: score
    });

    scores.sort(function(a, b) {
        return b.score - a.score;
    });

    localStorage.setItem("quizScores", JSON.stringify(scores));

    alert("🏆 Wynik zapisany!");

    nicknameBox.style.display = "none";
});function showLeaderboard() {
    const scores = JSON.parse(localStorage.getItem("quizScores")) || [];

    if (scores.length === 0) {
        leaderboardElement.innerHTML =
            "<p>Brak zapisanych wyników.</p>";
        return;
    }

    scores.sort(function(a, b) {
        return b.score - a.score;
    });

    const topScores = scores.slice(0, 10);

    leaderboardElement.innerHTML = "";

    topScores.forEach(function(player, index) {
        const row = document.createElement("div");

        row.className = "score-row";

        row.innerHTML =
            '<span class="score-place">' + (index + 1) + '.</span>' +
            '<span class="score-name">' + player.nickname + '</span>' +
            '<span class="score-points">' +
            player.score + '/50' +
            '</span>';

        leaderboardElement.appendChild(row);
    });showLeaderboard();
}