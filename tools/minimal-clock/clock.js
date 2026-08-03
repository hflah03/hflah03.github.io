// Basic script to update clock

console.log("JavaScript is successfully running!");

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function updateClock() {
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const milliseconds = currentTime.getMilliseconds();
    
    const smoothSeconds = seconds + (milliseconds / 1000);

    const hoursAngle = (30 * hours) + (0.5 * minutes)
    const minutesAngle = (6 * minutes) + (0.1 * smoothSeconds);
    const secondAngle = (6 * smoothSeconds)

    hourHand.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
    
    requestAnimationFrame(updateClock);
}

requestAnimationFrame(updateClock);