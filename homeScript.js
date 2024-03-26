
let clickaud = new Audio('click.mp3');


const body = document.querySelector('body')

console.log(body)
body.addEventListener('mousedown', clickSound)
function clickSound() {
    clickaud.play()
}


window.onload = function () {
    transitx()
    const slideS = new Audio('slide.mp3')
    const creditsButton = document.getElementById("1");
    const hiddenSocialDiv = document.getElementById("hidden-social1");
    const starImage = document.getElementById("img1");
    creditsButton.addEventListener("click", just);
    /*
 

    function startAnimationAndShowImage() {

        console.log('reached')
        creditsButton.removeEventListener("click", startAnimationAndShowImage);
        hiddenSocialDiv.style.zIndex = "100";
        starImage.style.zIndex = "100";
        starImage.classList.add("show");
        starImage.style.display = "block";
        starImage.style.animation = "slideRight 5s linear forwards";
        setTimeout(() => {
            hiddenSocialDiv.style.zIndex = '0'
            starImage.style.zIndex = '0'
        }, 3400)
        creditsButton.addEventListener("click", revertOpacityAndReset);
    }

    function revertOpacityAndReset() {

        console.log('breached')

        starImage.style.left = "-300px";
        starImage.style.animation = "none";
        hiddenSocialDiv.style.zIndex = "100";
        starImage.style.zIndex = "100";
        creditsButton.removeEventListener("click", revertOpacityAndReset);

        setTimeout(() => {
            hiddenSocialDiv.style.zIndex = '0'
            starImage.style.zIndex = '0'
        }, 3400)
        creditsButton.addEventListener("click", revertOpacityAndReset);

        setTimeout(function () {
            starImage.style.animation = "slideRight 5s linear forwards";
            creditsButton.addEventListener("click", startAnimationAndShowImage);
        }, 0);
    }
    */

    function just() {

        console.log('breached')

        starImage.style.left = "-300px";
        starImage.style.animation = "none";
        hiddenSocialDiv.style.zIndex = "100";
        starImage.style.zIndex = "-1";
        starImage.style.display = "block";
        starImage.style.animation = "slideRight 5s linear forwards";
        slideS.play()
        body.removeEventListener('mousedown', clickSound)

        setTimeout(() => {

            starImage.style.left = "-300px";
            starImage.style.animation = "none";
            starImage.style.animation = "";
            starImage.style.display = "none";

            hiddenSocialDiv.style.zIndex = '0'
            starImage.style.zIndex = '0'
            body.addEventListener('mousedown', clickSound)
        }, 5000)

      
    }


};

const splash = document.getElementById('splash');
const mainContent = document.querySelector('body');

splash.onload = function () {
    splash.style.display = 'block';
    mainContent.style.display = 'block';
};

const containOverlay = document.querySelector('#disappear div')
const overlay = document.getElementById('cover')
const mainvas = document.querySelector("mainvas")
let vaschildren = document.querySelectorAll('mainvas vaschild')
let opac = 1;

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
            top += Math.random() * 10
        }
    }

    lasttop = top;
    let right = (Math.random() + 2) * 10;
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
    let pacing = (Math.random() - 1) * 0.5;
    let opacPacing = (Math.random() + 0.001) * 0.009;

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

function Jian() {
    var image = document.getElementById("splash");
    var computedStyle = window.getComputedStyle(image);//JIAN GUMAGANA NAAAAAA AHADHAHDAHDWAUIDHWAOIUFHAWUIOFHWAUIOFHWAIPOUF
    var opacity = computedStyle.getPropertyValue("opacity");
    setTimeout(function () {
        if (opacity === "0") {
            image.style.opacity = "1";
            image.style.zIndex = "100000000";
            let clickaud = new Audio('splash.mp3');
            clickaud.play();


        } else {
            image.style.opacity = "0";//FINALLYLYYYYYY AUIDFHWAIUOFOWAIFAWOIFWAOIFGA IO
            image.style.zIndex = "0";
        }
    }, 700); // OK NA BA YUNG GANTO KATAGAL?   PWEDE NA YAN
}

const jakl = document.getElementById("mamsndie")
const ten = document.getElementById("aboutsquare")

jakl.addEventListener("click", abtlisten)

function abtlisten() {
    ten.classList.add("ten")
    setTimeout(float, 2500)
}
function float(){ 
   console.log("p")
    ten.addEventListener("click", EGOASP)

     
}

function EGOASP() {
    lipad(0)
}

function lipad(i = 0) {

   
    if (i === 0) {

        ten.classList.remove("ten")

    ten.removeEventListener("click", lipad)

   }

    console.log(ten.style.top = i + "%")


    ten.style.top = - (i) + "%"
    if(i<=200){
        i++; 
        setTimeout(() => {

            requestAnimationFrame(()=>{
                lipad(i)
            })
        }, 0);
        return


    }
    ten.addEventListener("click", lipad)

}

