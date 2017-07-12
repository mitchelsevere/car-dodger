const MAIN_CAR = document.querySelector('#car');
const OTHER_CAR = document.querySelector('#othercar');
let carPosition = 100;
let otherCarPosition = -200;
let carSpawnPosition = [100, 400, 700];
let random = Math.floor(Math.random() * carSpawnPosition.length);


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
        OTHER_CAR.style.left = `${carSpawnPosition[random]}px`;
        setTimeout(carSpawn, 1000);
    } 

    function carMove() {
        carSpawn();
        OTHER_CAR.style.top = `${otherCarPosition += 100}px`;
        setTimeout(carMove, 1000);
    }

    carMove();