function submitQuiz() {
    // Get the form and the selected answers
    const form = document.getElementById('quizForm');
    const answers = {
        q1: 'A',  
        q2: 'C',  
        q3: 'A',  
        q4: 8     
    };

    let score = 0;

    // Check each question
    for (let i = 1; i <= 3; i++) {
        const selectedAnswer = form.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[`q${i}`]) {
            score++;
        }
    }

    // Validate numerical question
    const q4Answer = parseInt(form.querySelector('#q4').value);
    if (!isNaN(q4Answer) && q4Answer === answers.q4) {
        score++;
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    if (score === 4) {
        resultDiv.textContent = "You scored 4 out of 4! Perfect!";
        resultDiv.classList.add('correct');
        resultDiv.classList.remove('incorrect');
    } else if (score === 3) {
        resultDiv.textContent = "You scored 3 out of 4. Great job!";
        resultDiv.classList.add('correct');
        resultDiv.classList.remove('incorrect');
    } else if (score === 2) {
        resultDiv.textContent = "You scored 2 out of 4. Keep it up!";
        resultDiv.classList.add('correct');
        resultDiv.classList.remove('incorrect');
    } else {
        resultDiv.textContent = "You scored less than 2. Better luck next time!";
        resultDiv.classList.add('incorrect');
        resultDiv.classList.remove('correct');
    }
}

// Reset the result message when the form is reset
const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', function() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
});
