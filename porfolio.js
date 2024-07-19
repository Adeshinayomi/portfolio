const loader=document.querySelector('.loader');

const nav=document.querySelector('.nav');
const bars=document.querySelector('.bars');

bars.addEventListener('click',function(){
   nav.classList.toggle('show-ul');
   bars.classList.toggle('show-bar');
})


window.addEventListener('load',function(){
   loader.style.display='none'
});

const article=document.querySelector('.more-about');
const education=document.querySelector('.Education');
const expertise=document.querySelector('.Expertise');
const btns=document.querySelectorAll('.btn')

btns.forEach(function(btn){
  btn.addEventListener('click',function(){
    if(btn.id === 'Expertise'){
      education.classList.remove('reveal');
      article.classList.remove('reveal');
    }else if(btn.id === 'Education'){
      education.classList.add('reveal');
      article.classList.add('reveal');
    }
  });
})

const faders=document.querySelectorAll('.fade-in');

const faderOption={
  root:null,
  threshold:0,
  rootMargin:"0px",
};

const fadeIn=new IntersectionObserver(function(entries,fadeIn){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add('fade');
        fadeIn.unobserve(entry.target);
      };
    });
},faderOption);

faders.forEach(fader =>{
  fadeIn.observe(fader);
});


const angleUp=document.getElementById('angleup');

window.addEventListener('scroll',function(){
 const scrolVal=this.window.scrollY;
  if(scrolVal > 400){
    angleUp.classList.add('show-angle');
  }else{
    angleUp.classList.remove('show-angle');
  };
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});