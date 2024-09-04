let initial = "M 10 100 Q 250 100 490 100"
let final = "M 10 100 Q 250 100 490 100"

let cont =  document.querySelector('.container')

cont.addEventListener('mousemove',(dets)=>{
    initial = `M 10 100 Q ${dets.x} ${dets.y} 490 100`

    gsap.to('svg path',{
        attr:{d:initial},
        duration:.3
    })
})
cont.addEventListener('mouseleave',(dets)=>{
    gsap.to('svg path',{
        attr:{d:final},
        duration:1,
        ease: "elastic.out(1.5,0.2)",
    })
})
