let clickaud = new Audio('click.mp3');


const body = document.querySelector('body')

console.log(body)
body.addEventListener('mousedown', clickSound)
function clickSound() {
    clickaud.play()
}