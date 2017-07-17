// Selected Elements
let mainCar = document.querySelector('#main-car');
let truck = document.querySelector('#car-truck');
let van = document.querySelector('#car-van');
let buggy = document.querySelector('#car-buggy');
let sedan = document.querySelector('#car-sedan');
let crash = document.querySelector('#explosion');
let lineTopLeft = document.querySelector('#st-line-1');
let lineMidLeft = document.querySelector('#st-line-2');
let lineBotLeft = document.querySelector('#st-line-3');
let lineTopRight = document.querySelector('#st-line-4');
let lineMidRight = document.querySelector('#st-line-5');
let lineBotRight = document.querySelector('#st-line-6');
let lines = document.querySelectorAll('.line');
let otherCars = [truck, van, buggy, sedan];

// Positioning
let mainCarPosition = 27; // Main Car Starting Position // X-Axis
let carPos = -100; // Y-Axis
let carPos2 = -170; // Y-Axis
let carPos3 = -230; // Y-Axis
let carSpawnPos = [27, 47, 67]; // X-Axis
let lineTopPosition = -50; // Lines Y-Axis
let lineMidPosition = 0; // Lines Y-Axis
let lineBotPosition = 50; // Lines Y-Axis

// Speed 
let carSpeed = 0.4;
let lineSpeed = 0.5;

// Counter 
let time = 0;
let score = 0;



// Score and Speed Timer
function timer() {
    time++;
    score++;
    console.log(`Timer: ${time}`);
    console.log(`Score: ${score}`);
    if (time % 45 === 0) {
        carSpeed += 0.2;
        lineSpeed += 0.2;
        score += 100;
    }
    setTimeout(timer, 1000);
}

timer();

// Referenced J's div racer for the keyup function
// Game movement for player car
function mainCarMove() {
    mainCar.style.left = `${mainCarPosition}%`;
    document.addEventListener('keyup', function(event) {
        if (event.keyCode === 39) {
            if (mainCarPosition < 50) {
                mainCarPosition += 20;
                mainCar.style.left = `${mainCarPosition}%`;
                mainCar.style.top = `${60}vh`;
                mainCar.style.transform = 'rotate(45deg)';
            }
        } else if (event.keyCode === 37) {
            if (mainCarPosition > 27) {
                mainCarPosition -= 20;
                mainCar.style.left = `${mainCarPosition}%`;
                mainCar.style.top = `${60}vh`;
                mainCar.style.transform = 'rotate(-45deg)';
            }
        }
        setTimeout(function() {
            mainCar.style.transform = 'rotate(0deg)';
            mainCar.style.top = `${65}vh`;
        }, 500);
    });
} // end of mainCarMove

mainCarMove();

// Game movement for AI cars and Street Lines
function animate() {
    carsMove(van, sedan, buggy);
    streetLineMove();
    movement = requestAnimationFrame(animate);
}

animate();

// Car traffic movement
function carsMove(car, car2, car3) {
    car.style.top = `${carPos += carSpeed}vh`;
    car2.style.top = `${carPos2 += carSpeed}vh`;
    car3.style.top = `${carPos3 += carSpeed}vh`;

    if (carPos > 100) {
        carPos = -100; 
        car.style.left = `${carSpawnPos[randomInt(carSpawnPos)]}%`;
    } else if (carPos2 > 100) {
        carPos2 = -150;
        car2.style.left = `${carSpawnPos[randomInt(carSpawnPos)]}%`;
    } else if (carPos3 > 100) {
        carPos3 = -200;
        car3.style.left = `${carSpawnPos[randomInt(carSpawnPos)]}%`;
    } 
} // end of carsMove

// Street line movement
function streetLineMove() {
    // Line Movement Resource https://www.youtube.com/watch?v=oWaGkW1YDmk
    if (lineTopPosition > 100) {
        lineTopPosition = -50;
    } else {
        lineTopLeft.style.top = `${lineTopPosition += lineSpeed}vh`;
        lineTopRight.style.top = `${lineTopPosition += lineSpeed}vh`;
    }  
    if (lineMidPosition > 100) {
        lineMidPosition = -50;
    } else {
        lineMidLeft.style.top = `${lineMidPosition += lineSpeed}vh`;
        lineMidRight.style.top = `${lineMidPosition += lineSpeed}vh`;
    }  
    if (lineBotPosition > 100) {
        lineBotPosition = -50;
    } else {
        lineBotLeft.style.top = `${lineBotPosition += lineSpeed}vh`;
        lineBotRight.style.top = `${lineBotPosition += lineSpeed}vh`;
    }  
} // end of streetLineMove

// // Collision checker
// function checkCollision() {
//     if (carPosition1 === 40 && currentCar.style.left === mainCar.style.left) {
//             crash.style.display = 'block';
//             gameOver();
//             console.log(`Don't drink and drive folks!`);
//     }
// }

// Random integer function that takes an array
function randomInt(arr) {
    return Math.floor(Math.random() * arr.length);
}
