function background() {
    let today = new Date();

    //// TIME ////
    let thisHour = today.getHours();
    let thisMinute = today.getMinutes();
    let thisSecond = today.getSeconds();

    let hourToR = map(thisHour, 0, 23, 0, 255);
    let minToG = map(thisMinute, 0, 59, 0, 255);
    let secToB = map(thisSecond, 0, 59, 0, 255);

    // Construct linear gradient background string
    let linearGradient = "linear-gradient(180deg, #C03A00 0%,  rgb(" + hourToR + ", " + minToG + ", " + secToB + ") 40%)";

    // Set background color to document body
    document.body.style.background = linearGradient;
}

setInterval(background, 1000);

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
