const player = document.querySelector(".player");
const cano = document.querySelector(".cano");
const buttonRestart = document.querySelector(".rel");


const jump = ()=> {
    player.classList.add("jump");
    setTimeout(
        () => {
            player.classList.remove("jump");
        }, 710
    );

    
}
const loop = setInterval(() =>  {
    const playerpos = +window.getComputedStyle(player).bottom.replace('px', '');
    const PipePos = cano.offsetLeft;
    if (PipePos <=  105 && PipePos > 10 && playerpos < 60){
        cano.style.animation = 'none';
        cano.style.left = `${PipePos}px`

        player.style.animation = 'none';
        player.style.bottom = `${playerpos}px`

       buttonRestart.classList.add("top")
    
       
    }

}, 1);
document.addEventListener("keydown" , jump);

document.addEventListener("click" , jump);