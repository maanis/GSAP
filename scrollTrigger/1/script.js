gsap.from('.page1 #box1', {
    opacity: 0,
    duration: 1,
    scale: 0,
    rotate: 360
})
gsap.from('.page2 #box2', {
    opacity: 0,
    duration: 2,
    scale: 0,
    rotate: 360,
    scrollTrigger: {
        trigger:".page2 #box2",
        scroller:"body",
        markers:true,
        start:"top 70%",
        scrub:5
    }
})