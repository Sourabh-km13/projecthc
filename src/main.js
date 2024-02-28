const a= document.querySelector('.tags>div>button');
const info=document.querySelector('.info');
const cards=document.querySelector('.cards')
a.addEventListener('click',function(e){
    info.style.filter='blur(8px)'
    cards.style.filter='blur(8px)'
    
    
})
  