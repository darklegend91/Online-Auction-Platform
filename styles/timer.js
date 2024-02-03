function updateCountdown() {
const currentDate = new Date();
const targetDate = new Date("2024-02-10T00:00:00"); // Change this to your target date

const timeRemaining = targetDate - currentDate;

if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
} else {
    document.getElementById('countdown').innerHTML = 'Expired';
    clearInterval(countdownInterval); // clearInterval is used to stop the execution of the Interval set.
}
}

const countdownInterval = setInterval(updateCountdown, 1000);
// setTnterval is used to execute the repeatedly execute a function at a specific interval, in out case, 1000 milliseconds (1 sec)

updateCountdown(); // Initial update

