function playSound(k){
    
    const audio = document.querySelector(`audio[data-key="${k}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${k}"]`);
    key.classList.add("playing");
    
}

function removeTransition(e){
    if(e.propertyName!='transform') return;
    this.classList.remove("playing");
}

function handleClick(e){
    playSound(this.getAttribute("data-key"));
}

function handleKeyDown(e){
    playSound(e.keyCode);
}

window.addEventListener("keydown",handleKeyDown);
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend",removeTransition));
keys.forEach(key => key.addEventListener("click",handleClick));

