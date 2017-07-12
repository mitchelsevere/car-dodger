const MAIN_CAR = document.querySelector('#car');
let carPosition = 100;

document.addEventListener('keyup', function(event) {
    console.log(event.keyCode);

    if (event.keyCode === 39) {
        carPosition += 300;
        MAIN_CAR.style.left = `${carPosition}px`;
    } else if (event.keyCode === 37) {
        carPosition -= 300;
        MAIN_CAR.style.left = `${carPosition}px`;
    }
});