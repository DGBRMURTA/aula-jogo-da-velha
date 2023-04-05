
  function VerificarGanhador(){
    
    if(op1.innerHTML == op2.innerHTML && op2.innerHTML == op3.innerHTML && op1.innerHTML != ""){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Você ganhou'))
        limpa();
    }
    if(op4.innerHTML == op5.innerHTML && op5.innerHTML == op6.innerHTML && op4.innerHTML != ""){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Você ganhou'))
        limpa();
    }
    if(op7.innerHTML == op8.innerHTML && op8.innerHTML == op9.innerHTML && op7.innerHTML != ""){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Você ganhou'))
        limpa();
    }
    if(op1.innerHTML == op4.innerHTML && op4.innerHTML == op7.innerHTML && op1.innerHTML != ""){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Você ganhou'))
        limpa();
    }
    if(op2.innerHTML == op5.innerHTML && op5.innerHTML == op8.innerHTML && op2.innerHTML != ""){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Você ganhou'))
        limpa();
    }
    if(op3.innerHTML == op6.innerHTML && op6.innerHTML == op9.innerHTML && op3.innerHTML != ""){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Você ganhou'))
        limpa();
    }
    if(op1.innerHTML == op5.innerHTML && op5.innerHTML == op9.innerHTML && op1.innerHTML != ""){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Você ganhou'))
        limpa();
    }
    if(op3.innerHTML == op5.innerHTML && op5.innerHTML == op7.innerHTML && op3.innerHTML != ""){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Você ganhou'))
        limpa();
    }
}