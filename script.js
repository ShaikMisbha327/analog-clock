const clock = document.querySelector('.clock');
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

for (let i = 1; i <= 12; i++) {
    let number = document.createElement('div');
    number.classList.add('number');
    let angle = (i * 30) * (Math.PI / 180);
    let x = 50 + 40 * Math.sin(angle);
    let y = 50 - 40 * Math.cos(angle);
    number.style.left = `${x}%`;
    number.style.top = `${y}%`;
    number.innerText = i;
    clock.appendChild(number);
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (0.5 * minutes);
    const minuteDeg = (minutes * 6) + (0.1 * seconds);
    const secondDeg = seconds * 6;

    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
