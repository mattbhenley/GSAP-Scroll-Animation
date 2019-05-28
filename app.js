const flightPath = {
    curviness: 1.25,
    autoRotate: true, 
    // Add movement to .paper-plane
    values: [
        {x: 100, y: -20}, 
        {x: 300, y: 10}, 
        {x: 500, y: 100},  
        {x: 750, y: -100}, 
        {x: 350, y: -50},
        {x: 600, y: 100},
        {x: 800, y: 0},
        {x:window.innerWidth, y: -250}
        ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation', 
    duration: 2000, //time of animation
    triggerHook: 0

})
.setTween(tween)
//.addIndicators() an option if you would like to set your trigger, start, and end. 
.setPin('.animation') // locking the page so that you cannot scroll past the animation until it is finsihed. 
.addTo(controller);