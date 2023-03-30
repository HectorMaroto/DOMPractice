const d = document;
const w = window;

export default function speechReader(){
    const speechSelect=d.getElementById("speech-select");
    const speechTextArea=d.getElementById("speech-text");
    const speechBtn=d.getElementById("speech-btn");
    const speechMessage=new SpeechSynthesisUtterance(); //Invocamos la API que permite leer los mensajes

    //console.log(speechMessage);

    let voices=[];

    d.addEventListener("DOMContentLoaded",e=>{
        //console.log(w.speechSynthesis.getVoices());
        w.speechSynthesis.addEventListener("voiceschanged",e=>{
            //console.log(e);
            voices=w.speechSynthesis.getVoices();
            //console.log(voices);
            voices.forEach(v=>{
                const option=d.createElement("option");
                option.value=v.name;
                option.textContent=`${v.name} *** ${v.lang}`;

                speechSelect.appendChild(option);
            })
        })
    });
    d.addEventListener("change",e=>{
        if(e.target===speechSelect){
            speechMessage.voice=voices.find(voice=>voice.name===e.target.value);
        }
        //console.log(speechMessage);
    });
    d.addEventListener("click",e=>{
        if(e.target===speechBtn){
            speechMessage.text = speechTextArea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });

}