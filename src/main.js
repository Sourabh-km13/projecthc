const a= document.querySelector('.tags>div>button');
const info=document.querySelector('.info');
const cards=document.querySelector('.cards')
a.addEventListener('click',function(e){
    info.style.filter='blur(8px)'
    cards.style.filter='blur(8px)'
    
    
  })
  const notin=document.createElement("div");
  const notification=document.querySelector('.notification')
notification.addEventListener('click',function(e){
   notin.className="notin"
   notification.append(notin);
  notin.innerHTML="no notification";
})
  
const content=document.querySelectorAll(".info , .cards")