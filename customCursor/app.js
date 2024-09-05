let main = document.querySelector('.main')
let cursor = document.querySelector('.cursor')
let imgcont= document.querySelector('.img-cont')

main.addEventListener('mousemove',(dets)=>[
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:.3,
    })
])

imgcont.addEventListener('mousemove',()=>{
    gsap.to(cursor,{
        height:'60px',
        width:'60px',
        opacity:.8,
        backgroundColor:"#212121"
    })
    cursor.innerHTML=`<i class="fa-solid text-2xl text-white fa-arrow-right"></i>`
})

imgcont.addEventListener('click',()=>{
    
})

imgcont.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        height:'20px',
        width:'20px',
        opacity:1,
        backgroundColor:"#fff"
    })
    cursor.innerHTML = ""
})