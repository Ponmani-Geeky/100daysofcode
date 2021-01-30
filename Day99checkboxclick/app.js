const checkboxs=document.querySelectorAll('.item input[type="checkbox"]');

let lastClicked

function handleClicks(event){
    let inBetween=false;
    if(event.shiftKey && this.checked){
        checkboxs.forEach(checkbox=>{
            console.log(checkbox)
            if(checkbox===this || checkbox===lastClicked){
                inBetween=!inBetween;
                console.log('starting to check inbetween')
            }

            if(inBetween){
             checkbox.checked=true
            }
        })

        
    }
    lastClicked=this;
}

checkboxs.forEach(checbox=>{
    checbox.addEventListener('click',handleClicks)
})
console.log(checkboxs);