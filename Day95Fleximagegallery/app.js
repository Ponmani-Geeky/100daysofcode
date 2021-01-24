const panels=document.querySelectorAll('.panel');

panels.forEach(panel=>{
    panel.style.cursor='pointer'
    panel.addEventListener('click',toggelOpen)
    panel.addEventListener('transitionend',toggelTransition)
});

function toggelOpen(e){
  this.classList.toggle('open');
}

function toggelTransition(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}