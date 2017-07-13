let mainCar = document.querySelector('#audi');
let truck = document.querySelector('#truck');
let van = document.querySelector('#mini-van');
let mini = document.querySelector('#mini-truck');
let sedan = document.querySelector('#car');
let lines = document.querySelectorAll('.line');

let linesPosition = -200;
let carPosition = 100;
let otherCarPosition = -200;
let carSpawnPositions = [100, 400, 700];
let otherCars = [truck, van, mini, sedan];


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

    function otherCarSpawn() {
        for (let i = 0; i < otherCars.length; i++) {
            otherCars[i].style.top = `${otherCarPosition}px`;
        }

        currentCar = otherCars[randomInt(otherCars)];
        currentCar.style.left = `${carSpawnPositions[randomInt(carSpawnPositions)]}px`;
        otherCarMove();
        setTimeout(otherCarSpawn, 4000);
    } 

otherCarSpawn();


    function otherCarMove() {
        // Request Animation Resource https://www.youtube.com/watch?v=rNsC1VI9388
        let animate = window.requestAnimationFrame(otherCarMove);
        
        if (otherCarPosition > 850) {
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

    function streetMove() {
        let animate = window.requestAnimationFrame(streetMove);
        for (let i = 0; i < lines.length; i++) {
            if (linesPosition > 30) {
                linesPosition = -200;
            } else {
                lines[i].style.top = `${linesPosition += 0.5}px`;
            }  
        }  
    }

    streetMove();