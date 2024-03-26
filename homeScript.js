const containOverlay = document.querySelector('#disappear div')
const overlay = document.getElementById('cover')
const mainvas = document.querySelector("mainvas")
let vaschildren = document.querySelectorAll('mainvas vaschild')
let opac = 1;

window.onload = transitx
function transitx() {


    overlay.style.opacity = opac
    opac -= 0.05

    if (opac < 0) { return }
    requestAnimationFrame(transitx)
    containOverlay.innerHTML = ''
}
let lasttop;

spawn()
function spawn() {
    let newVas = document.createElement("vaschild");
    let top = Math.random() * 100;

    if (Math.abs(lasttop - top) < 10) {

        if (lasttop > 50) {
            top -= Math.random() * 10;
        }
        else {
            top += Math.random() *10
        }
    }

    lasttop = top;
    let right = (Math.random()+2) * 10;
    let size = (Math.random() + 10) * 40;
    newVas.style.width = size + "px";
    newVas.style.height = size + "px";
    mainvas.appendChild(newVas, top)
    newVas.style.top = top + '%'
    newVas.style.right = right + '%'

     vaschildren = document.querySelectorAll('mainvas vaschild')

    move(newVas, top)
    setTimeout(() => {
        requestAnimationFrame(spawn);
    }, 1500)
}

function move(newVasX, topx) {
    let opacityx = 1;;
   let pacing = (Math.random()-1)*0.5;
   let opacPacing = (Math.random()+0.001)*0.009;

    looperMovement()
    function looperMovement(top = topx, opacity = opacityx) {
         pacing = (Math.random() - 0.5) * 0.5;
            newVasX.style.top = top + '%'
            newVasX.style.opacity = opacity;
            top += pacing;
            opacity -= opacPacing

            if (opacity >= 0) {
                requestAnimationFrame(() => { looperMovement(top, opacity) })
                return;
            }

            mainvas.removeChild(newVasX)
        }

}


    




const buttons = document.querySelectorAll('#mainMenu button img')
console.log(buttons)
const hoversrcs = ['startHover.png', 'aboutHover.png', 'creditHover.png', 'instructHover.png']
const buttonsrcs = ['startBtn.png', 'aboutBtn.png', 'creditBtn.png', 'instructBtn.png']

for (let i = 0; i < 4; i++) {


    buttons[i].addEventListener("mouseover", () => {
       

        buttons[i].setAttribute("src", hoversrcs[i])
    })

    buttons[i].addEventListener("mouseout", () => {
        buttons[i].setAttribute("src", buttonsrcs[i])
    })
}