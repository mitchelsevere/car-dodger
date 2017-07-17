# Car Dodge

![Image](https://github.com/thatdudemitch/car-dodger/blob/master/images/Gameplay.png)

## What is Car Dodge?

> Car dodge is an inifite driver where the objective is to get as many points before you crash. I played games similar to this when I was young and I thought recreating it would be a fun project.

## Technical Discussion

> I used HTML, CSS and Vanilla JS. I was tempted to use jQuery but decided that my JS skills still need more work before touching frameworks.

### Notes on Game Structure

> Definitely messed around with moving the car left and right. Used percentages and vh so playing around with the numbers was definitely a tedious process. 
```function mainCarMove() {
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
} // end of mainCarMove```
> I also had issues with the cars over spawning but nesting my functions and using requestanimationframe helped allieviate that problem

## The Making of Car Dodge

> Super tough but extremely enjoyable. Found myself frusted at times but actually having it finished is the greatest emotion out of the emotions I went through. 

## Opportunities for Future Growth

> I would love to finish figuring out how to add my landing page with the game running in the background before I click start. Maybe add some powerups to the game. 
