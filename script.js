// Random color generator
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Apply random background + style
function applyDesign() {
    document.body.style.background =
        `linear-gradient(45deg, ${randomColor()}, ${randomColor()})`;
    document.body.style.color = randomColor();

    document.querySelectorAll("h1, p, h2").forEach(item => {
        item.style.background = randomColor() + "99";
        item.style.padding = "10px";
        item.style.borderRadius = "10px";
    });
}

// Random text
function randomContent() {
    const titles = ["Welcome!", "New Look!", "Fresh Style!", "Hey There!"];
    const texts  = ["Design updated!", "Enjoy the randomness!", "Updated every 3 seconds!", "JavaScript fun!"];

    document.getElementById("title").textContent =
        titles[Math.floor(Math.random() * titles.length)];

    document.getElementById("content").textContent =
        texts[Math.floor(Math.random() * texts.length)];
}

// ------ 3 SECOND COUNTDOWN ------
let secondsLeft = 3;

function updateTimer() {
    document.getElementById("timerElem").textContent =
        `00:00:0${secondsLeft}`;

    secondsLeft--;

    if (secondsLeft < 0) {
        // Reset timer
        secondsLeft = 3;

        // Refresh design + content
        applyDesign();
        randomContent();
    }
}

// Run once on page load
applyDesign();
randomContent();
updateTimer();

// Update countdown every second
setInterval(updateTimer, 1000);



