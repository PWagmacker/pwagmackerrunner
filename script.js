const player = document.querySelector(".player");
const pipe = document.querySelector(".pipe");
const buttonRestart = document.querySelector(".restart");


const jump = ()=> {
    player.classList.add("jump");
    setTimeout(
        () => {
            player.classList.remove("jump");
        }, 710
    );

    
}
const loop = setInterval(() =>  {
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');
    const PipePosition = pipe.offsetLeft;
    if (PipePosition <=  105 && PipePosition > 10 && playerPosition < 60){
        pipe.style.animation = 'none';
        pipe.style.left = `${PipePosition}px`

        player.style.animation = 'none';
        player.style.bottom = `${playerPosition}px`

       buttonRestart.classList.add("restartTop")
    
       
    }

}, 1);
document.addEventListener("keydown" , jump);

document.addEventListener("click" , jump);