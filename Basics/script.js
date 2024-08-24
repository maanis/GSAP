
const tl = gsap.timeline()

tl.to('#box', {
    x: 400,
    duration: 1,
    rotate: 360,
    delay: .5
})
tl.to('#box2', {
    x: 400,
    scale: 1.4,
    duration: 1,
})
tl.to('#box3', {
    x: 400,
    scale: .8,
    borderRadius: '50%',
    duration: 1,
})
tl.to('#box4', {
    y: 400,
    backgroundColor: "crimson",
    transform: "translateX(-50%,-50%)",
    duration: 1,
})