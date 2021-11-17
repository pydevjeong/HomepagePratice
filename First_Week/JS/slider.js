const slides=document.querySelector('.slides')
const slidesImg=document.querySelectorAll('.slides img')

const prevBtn=document.querySelector('#prevBtn')
const nextBtn=document.querySelector('#nextBtn')

let counter=1;
const size=slidesImg[0].clientWidth

slides.style.transform='translateX('+(-size*counter)+'px)'
//그림 크기만큼 움직이는거임 위에 size정의한게 그림크기(width) 정의

nextBtn.addEventListener('click',()=>{
  if(counter>=slidesImg.length-1) return
  slides.style.transition="transform 0.5s ease-in-out"
  counter++
  slides.style.transform='translateX('+(-size*counter)+'px)'
})
prevBtn.addEventListener('click',()=>{
  if(counter<=0) return
  slides.style.transition="transform 0.5s ease-in-out"
  counter--
  slides.style.transform='translateX('+(-size*counter)+'px)'
})

slides.addEventListener('transitionend',()=>{
  if(slidesImg[counter].id==='lastClone'){
    slides.style.transition='none'
    counter=slidesImg.length-2;
    slides.style.transform='translateX('+(-size*counter)+'px)'
  }
  if(slidesImg[counter].id==='firstClone'){
    slides.style.transition='none'
    counter=slidesImg.length-counter;
    slides.style.transform='translateX('+(-size*counter)+'px)'
  }
})