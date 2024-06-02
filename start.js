document.getElementById("startButton").addEventListener("click", function() {
    const selectedDifficulty = document.getElementById("difficulty").value;

    let quizPage;
    if (selectedDifficulty === "easy") {
        quizPage = "easy.html";
    } else if (selectedDifficulty === "medium") {
        quizPage = "medium.html";
    } else if (selectedDifficulty === "hard") {
        quizPage = "hard.html";
    }

    localStorage.setItem("selectedDifficulty", selectedDifficulty);
    window.location.href = quizPage;
});


document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const difficultySelect = document.getElementById('difficulty');
    const startButton = document.getElementById('startButton');

    searchBar.addEventListener('input', function () {
        const value = searchBar.value.toLowerCase().trim();
        if (value === 'easy' || value === 'medium' || value === 'hard') {
            difficultySelect.value = value;
        } else {
            difficultySelect.value = '';
        }
    });

    startButton.addEventListener('click', function () {
        const selectedDifficulty = difficultySelect.value;
        
        
    });
});