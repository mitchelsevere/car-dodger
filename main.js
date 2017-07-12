const MAIN_CAR = document.querySelector('#car');
const OTHER_CAR = document.querySelector('#othercar');
let carPosition = 100;
let otherCarPosition = 0;


    document.addEventListener('keyup', function(event) {
        if (event.keyCode === 39) {
            if (carPosition < 700) {
                carPosition += 300;
                MAIN_CAR.style.left = `${carPosition}px`;
            }
        } else if (event.keyCode === 37) {
            if (carPosition > 100) {
                carPosition -= 300;
                MAIN_CAR.style.left = `${carPosition}px`;
            }
        }
    });

    function carSpawn() {
        OTHER_CAR.style.top = `${otherCarPosition}px`;
        setTimeout(carSpawn, 10000);
    }

    carSpawn();
