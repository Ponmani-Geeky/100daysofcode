const talk=document.querySelector('.talk');
const content= document.querySelector('.content');


const friend1=['JUST PANNU','SOLUNGA THALAIVI','HEY CK'];
const friend2=['HEY KUTTY CHATHAN','KUTTY','KUTTY CHENNAI EPO POLAM'];
const sister=['HEY REST KUTTY','PLEASE DO WORK','ENNA PANNRA']
const SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();

recognition.onstart=function(){
    console.log("voice activated");
}

recognition.onresult=function(event){
     const current=event.resultIndex;

     const transcript=event.results[current][0].transcript;
     readOutLoad(transcript);
}

talk.onclick=function(e){
    recognition.start();
    e.preventDefault();
}

function readOutLoad(message){
    const speech= new SpeechSynthesisUtterance();
    speech.text="Talk to you later";
    content.textContent="Talk to you later";
    if(message.includes('Priya','Iam priya')){
       const reply= friend1[Math.floor(Math.random()*friend1.length)];
       speech.text=reply;
       content.textContent=reply;
    }
    if(message.includes('Aarti')){
        const reply1=sister[Math.floor(Math.random()*sister.length)];
        speech.text=reply1;
        content.textContent=reply1;
    }
    if(message.includes('how are you')){
        const reply2= 'its boring come lets watch movie';
        speech.text=reply2;
        content.textContent=reply2;
    }
    if(message.includes('Vinita','Iam Vinita')){
        const reply3=friend2[Math.floor(Math.random()*friend2.length)];
        speech.text=reply3;
        content.textContent=reply3;
    }
    if(message.includes('phone money','Iam phone money')){
        const reply4='Hello Handsome'
        speech.text=reply4;
        content.textContent=reply4;
    }
    
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;

    window.speechSynthesis.speak(speech);
}