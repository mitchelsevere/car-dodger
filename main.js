// Selected Elements
let mainCar = document.querySelector('#main-car');
let truck = document.querySelector('#car-truck');
let van = document.querySelector('#car-van');
let mini = document.querySelector('#car-truck-mini');
let sedan = document.querySelector('#car-sedan');
let crash = document.querySelector('#explosion');
let lineTopLeft = document.querySelector('#st-line-1');
let lineMidLeft = document.querySelector('#st-line-2');
let lineBotLeft = document.querySelector('#st-line-3');
let lineTopRight = document.querySelector('#st-line-4');
let lineMidRight = document.querySelector('#st-line-5');
let lineBotRight = document.querySelector('#st-line-6');
let lines = document.querySelectorAll('.line');
let otherCars = [truck, van, mini, sedan];

// Positioning
let mainCarPosition = 16; // Main Car Starting Position // X-Axis
let carPosition1 = -100; // Y-Axis
let carPosition2 = -125; // Y-Axis
let carSpawnPositions = [16, 42, 68]; // X-Axis
let lineTopPosition = -300;
let lineMidPosition = 100;
let lineBotPosition = 500;

// Speed 
let carSpeed = 0.5;
let lineSpeed = 2.0;

// Counter 
let time = 0;
let score = 0;

/**** FUNCTIONS *****/ 
function timer() {
    time++;
    score++;
    console.log(`Timer: ${time}`);
    console.log(`Score: ${score}`);
    if (time % 30 === 0) {
        carSpeed += 0.5;
        lineSpeed += 1;
        score += 100;
    }
    setTimeout(timer, 1000);
}

timer();

// Referenced J's div racer for the keyup function
function mainCarMove() {
    mainCar.style.left = `${mainCarPosition}%`;
    document.addEventListener('keyup', function(event) {
        if (event.keyCode === 39) {
            if (mainCarPosition < 50) {
                mainCarPosition += 26;
                mainCar.style.left = `${mainCarPosition}%`;
                mainCar.style.top = `${60}vh`;
                mainCar.style.transform = 'rotate(45deg)';
            }
        } else if (event.keyCode === 37) {
            if (mainCarPosition > 16) {
                mainCarPosition -= 26;
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
}

mainCarMove();

// Spawn car
function otherCarSpawn() {
    // for (let i = 0; i < otherCars.length; i++) {
    //     otherCars[i].style.top = `${carPosition2}vh`;
    //     otherCars[i].style.display = 'none';
    // }

    traffic = setTimeout(function() {
        currentCar = otherCars[randomInt(otherCars)];
        currentCar.style.display = 'block';
        currentCar.style.top = `${carPosition1}vh`;
        currentCar.style.left = `${carSpawnPositions[randomInt(carSpawnPositions)]}%`;
        
        currentCar2 = otherCars[randomInt(otherCars)];
        currentCar2.style.display = 'block';
        currentCar2.style.top = `${carPosition2}vh`;
        currentCar2.style.left = `${carSpawnPositions[randomInt(carSpawnPositions)]}%`;

        if (currentCar.style.left === currentCar2.style.left) {
            currentCar2.style.display = 'none';
        }

        otherCarMove();
        console.log('Help Me!!!!');
        otherCarSpawn();
    }, 5000);
} 

otherCarSpawn();

// Car traffic movement
function otherCarMove() {
    // Request Animation Frame Resource https://www.youtube.com/watch?v=rNsC1VI9388
    // let animate = window.requestAnimationFrame(otherCarMove);
    setInterval(function() {
        if (carPosition1 > 100 && carPosition2 > 100) {
            cancelAnimationFrame(animate);
        } else if (carPosition1 > 100) {
            carPosition1 = -100;
            // currentCar.style.display = 'none';
            // console.log('Display: "None"');
        } else if (carPosition2 > 100) {
            carPosition2 = -125;
            // currentCar2.style.display = 'none';
            // console.log('Display: "None"');
        } else {
            currentCar.style.top = `${carPosition1 += carSpeed}vh`;
            currentCar2.style.top = `${carPosition2 += carSpeed}vh`;
        }
        console.log('Check');
        checkCollision();
    }, 5000);
}

// Street line movement
function streetLineMove() {
    // Line Movement Resource https://www.youtube.com/watch?v=oWaGkW1YDmk
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
    if (carPosition1 === 40 && currentCar.style.left === mainCar.style.left ||
        carPosition2 === 40 && currentCar2.style.left === mainCar.style.left) {
            crash.style.display = 'block';
            gameOver();
            console.log(`Don't drink and drive folks!`);
    }
}

// Random integer function that takes an array
function randomInt(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Reload Resource https://www.w3schools.com/jsref/met_loc_reload.asp
function gameOver() {
    console.log(score);
}




