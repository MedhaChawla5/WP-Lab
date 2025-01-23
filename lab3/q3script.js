document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get the input marks
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);
    let subject4 = parseFloat(document.getElementById('subject4').value);

    // Check for invalid input (e.g., non-numeric values or empty input)
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4)) {
        alert('Please enter valid numbers for all subjects.');
        return;
    }

    // Calculate the average marks
    let average = (subject1 + subject2 + subject3 + subject4) / 4;

    // Display the average
    document.getElementById('averageText').textContent = `Average: ${average.toFixed(2)}`;

    // Determine the grade
    let grade = '';
    if (average > 90) {
        grade = 'A';
    } else if (average > 80) {
        grade = 'B';
    } else if (average > 70) {
        grade = 'C';
    } else if (average > 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display the grade
    document.getElementById('gradeText').textContent = `Grade: ${grade}`;
});
