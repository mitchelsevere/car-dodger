// Selected Elements
let mainCar = document.querySelector('#main-car');
let truck = document.querySelector('#car-truck');
let van = document.querySelector('#car-van');
let mini = document.querySelector('#car-truck-mini');
let sedan = document.querySelector('#car-sedan');
let lineTopLeft = document.querySelector('#st-line-1');
let lineMidLeft = document.querySelector('#st-line-2');
let lineBotLeft = document.querySelector('#st-line-3');
let lineTopRight = document.querySelector('#st-line-4');
let lineMidRight = document.querySelector('#st-line-5');
let lineBotRight = document.querySelector('#st-line-6');
let lines = document.querySelectorAll('.line');
let otherCars = [truck, van, mini, sedan];

// Positioning
let carPosition = 16; // Main Car Starting Position // X-Axis
let otherCarPosition = -200; // Y-Axis
let carSpawnPositions = [16, 42, 68]; // X-Axis
let lineTopPosition = -300;
let lineMidPosition = 100;
let lineBotPosition = 500;

// Speed 
let carSpeed = 1.5;
let lineSpeed = 1.5;

/**** FUNCTIONS *****/ 
// Referenced J's div racer for the keyup function
function mainCarMove() {
    document.addEventListener('keyup', function(event) {
        if (event.keyCode === 39) {
            if (carPosition < 50) {
                carPosition += 26;
                mainCar.style.left = `${carPosition}%`;
            }
        } else if (event.keyCode === 37) {
            if (carPosition > 16) {
                carPosition -= 26;
                mainCar.style.left = `${carPosition}%`;
            }
        }
    });
}

mainCarMove();

// Spawn car
function otherCarSpawn() {
    for (let i = 0; i < otherCars.length; i++) {
        otherCars[i].style.top = `${otherCarPosition}px`;
    }
        currentCar = otherCars[randomInt(otherCars)];
        currentCar.style.left = `${carSpawnPositions[randomInt(carSpawnPositions)]}%`;

        console.log('New car alert!');
        var interval = setTimeout(otherCarSpawn, 5000);
    } 

otherCarSpawn();

// Car traffic movement
function otherCarMove() {
    // Request Animation Resource https://www.youtube.com/watch?v=rNsC1VI9388
    let animate = window.requestAnimationFrame(otherCarMove);
    if (otherCarPosition > 850) {
        otherCarPosition = -200;
        cancelAnimationFrame(animate);
    } else {
        currentCar.style.top = `${otherCarPosition += carSpeed}px`;
    }
    checkCollision();
}

// Street line movement
function streetLineMove() {
    let animate = window.requestAnimationFrame(streetLineMove);
    if (lineTopPosition > 900) {
        lineTopPosition = -300;
    } else {
        lineTopLeft.style.top = `${lineTopPosition += lineSpeed}px`;
        lineTopRight.style.top = `${lineTopPosition += lineSpeed}px`;
    }  
    if (lineMidPosition > 900) {
        lineMidPosition = -300;
    } else {
        lineMidLeft.style.top = `${lineMidPosition += lineSpeed}px`;
        lineMidRight.style.top = `${lineMidPosition += lineSpeed}px`;
    }  
    if (lineBotPosition > 900) {
        lineBotPosition = -300;
    } else {
        lineBotLeft.style.top = `${lineBotPosition += lineSpeed}px`;
        lineBotRight.style.top = `${lineBotPosition += lineSpeed}px`;
    }  
}

streetLineMove();

// Collision checker
function checkCollision() {
    if (otherCarPosition === 480 && currentCar.style.left === mainCar.style.left) {
        currentCar.style.display = 'none';
        mainCar.style.display = 'none';
        console.log(`Don't drink and drive folks!`);
        alert('Damnnnnnnn, You wrecked!');
    }
}

// Random integer function that takes an array
function randomInt(arr) {
    return Math.floor(Math.random() * arr.length);
}
