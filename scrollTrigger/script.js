gsap.from('.page1 #box1', {
    opacity: 0,
    duration: 1,
    scale: 0,
    rotate: 360
})
gsap.from('.page2 #box2', {
    opacity: 0,
    duration: 1,
    scale: 0,
    rotate: 360,
    scrollTrigger: ".page2 #box2"
})