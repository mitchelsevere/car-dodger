let mainCar = document.querySelector('#audi');
let truck = document.querySelector('#truck');
let van = document.querySelector('#mini-van');
let mini = document.querySelector('#mini-truck');
let sedan = document.querySelector('#car');

let carPosition = 100;
let otherCarPosition = -200;
let carSpawnPositions = [100, 400, 700];
let otherCars = [truck, van, mini, sedan];

let randomPosition = randomInt(carSpawnPositions);
let randomCar = randomInt(otherCars);

// Referenced J's div racer logic for the keyup function
function mainCarMove() {
    document.addEventListener('keyup', function(event) {
        if (event.keyCode === 39) {
            if (carPosition < 700) {
                carPosition += 300;
                mainCar.style.left = `${carPosition}px`;
            }
        } else if (event.keyCode === 37) {
            if (carPosition > 100) {
                carPosition -= 300;
                mainCar.style.left = `${carPosition}px`;
            }
        }
    });
}

    function carSpawn() {
        console.log(randomCar);
        console.log(randomPosition);
        currentCar = otherCars[randomCar];
        currentCar.style.left = `${carSpawnPositions[randomPosition]}px`;
        currentCar.style.top = `${otherCarPosition}px`;
        carMove();
    } 

    carSpawn();

    function carMove() {
        let animate = window.requestAnimationFrame(carMove);
        if (otherCarPosition > 800) {
            console.log('hello');
            otherCarPosition = -200;
            cancelAnimationFrame(animate);
        } else {
            currentCar.style.top = `${otherCarPosition += 5}px`;
        }
    }

    function randomInt(arr) {
       return Math.floor(Math.random() * arr.length);
    }

    mainCarMove();