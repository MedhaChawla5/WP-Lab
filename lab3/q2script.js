function updateTimeAndGreet() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    document.getElementById('clock').textContent = timeString;

    let greeting = '';
    let backgroundClass = '';

    if (hours >= 6 && hours < 12) {
        greeting = "Good Morning!";
        backgroundClass = 'morning';
    } else if (hours >= 12 && hours < 18) {
        greeting = "Good Afternoon!";
        backgroundClass = 'afternoon';
    } else if (hours >= 18 && hours < 21) {
        greeting = "Good Evening!";
        backgroundClass = 'evening';
    } else {
        greeting = "Good Night!";
        backgroundClass = 'night';
    }

    document.body.className = backgroundClass;

    // Display greeting in a small box
    document.getElementById('greeting').textContent = greeting;
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

setInterval(updateTimeAndGreet, 1000); // Update every second
