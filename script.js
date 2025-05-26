omni = document.querySelector("#watch");
omniSound = new Audio("/ben10.mp3")
let angle = 0 ;
function rotate(){
    angle += 180;
    omni.style.transform =`rotate(${angle}deg)`;
}
setTimeout(() => {
    rotate();
}, 100);
rotate();
omni.addEventListener("click",()=>{
    rotate();
    omniSound.play();
    setTimeout(() => {
        omniSound.pause();
        omniSound.currentTime = 0;
    }, 1000);
});
