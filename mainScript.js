const selectionFull = document.getElementById('mainMenu')
const question = document.getElementById('question')
const choices = document.querySelectorAll('#mainMenu button')
const cover = document.getElementById('cover')
let fullChoiceArray =
    [
        "seongthea.png", 'josephina.png', 'gabriella.png', 'princess.png',

        "yes.png", "maybe.png", "no.png", "Sometimes.png",

        "jose.png", 'alexis.png', 'ecija.png', 'dysangco.png',

        "researchers.png", 'pearl.png', 'diamond.png', 'discoverers.png',

        'yes.png', 'no.png', 'sometimes.png', 'maamsandie.png',

        'maampam.png', 'maampelayo.png', 'sirjeric.png', 'sircalleja.png',

        'maamsandie2.png', 'maampalafox.png', "maamkashieca.png", "maamviray.png",

        "sirjeric2.png", "sirpogi.png", "sirpogingpogi.png", "sirpinakapogi.png",

        "eax1.png", "eax2.png", "eax3.png", "eax4.png",

        "kwekkwek.png", "tokeneneng.png", "glowinthedarkballs.png", "latolato.png",

        "this1.png", "this2.png", "this3.png", "this4.png",

        "empty", "empty", 'empty', 'empty',

        '99.png', '991.png', '100.png', '100per.png',

        'yes.png', 'yes.png', 'yes.png', 'yes.png',

        '99.png', '991.png', '100.png', '100per.png'



    ]
let qNum = document.getElementById('qNum')
let questionCount = 1;
const mistake = new Audio('wrong.mp3')
let victory = new Audio('tada.mp3')
let ansKeyArray = ['josephina.png', 'titleanswer', 'dysangco.png', 'diamond.png', 'maamsandie.png', 'noanswer', 'noanswer', 'sirjeric2.png', "eax2.png", "kwekkwek.png", "noanswer", "clickme", "yes.png", "gimmick"]

let hov1;
let n1;
let hov2;
let n2;
let hov3;
let n3;
let hov4;
let n4;
let score = 0;
let allowAns = true;

let questionArray = [
    'Who is the muse of Diamond?', //1
    "Click the", //2
    "Who is 8-Diamond's peace officer?", //3
    'Which of the following is an SPJ section?',
    'Is water compressible?',  //5
    "What is the full name of 8-Diamond's adviser?",
    "Who went to Baguio for ASMEPPS?",
    "Who is 8-Diamond's ICT teacher?",  //8
    "What follows December 2nd?",
    'Also known as "Neon Balls"', //10
    "Which is the correct answer in question 2?",
    ""//12
    , "Click the circle",
    "Is this quiz fun?"
]

eventAdd()
let valuex = "";
function eventAdd() {

    for (let i = 0; i < choices.length; i++) {
        let choice = choices[i]
        console.log(choice)
        choice.addEventListener("click", () => {
            if (allowAns == false) {
                return;
            }
            allowAns = false
            questionCount++
            choice.style.scale = '1'
            timer = timedef;
            countdownDisplay.innerText = timer
            if (choice.classList.contains('right')) {
                victory.play();
                console.log('reached')
                score++

                cover.style.pointerEvents = 'all'
                switch (valuex) {
                    
                    case "sirjeric":
                        setTimeout(() => {
                            alert('it Looks like yoUr answer Can be or is a valid Key to mY question')


                        }, 100)
                        break;
                    case "correc":
                        setTimeout(() => {
                            alert('it Looks like yoUr answer Can be or is a valid Key to mY question')


                        }, 100)
                        break;
                    case "end":
                        qNum.innerText = 'Nice'

                        setTimeout(() => { qNum.innerText=' Nice' }, 99)
                        setTimeout(() => {
                            alert('Thank you sir')


                        }, 100)
                        break;
                    default:
                        setTimeout(() => {
                            alert('it Looks like yoUr answer Can be or is a valid Key to mY question')


                        }, 100)
                        break;
                }

               
            }
            else {
              
                switch (valuex) {

                    case "sirjeric":
                        setTimeout(() => {
                            alert("Accurate description BUT we needed the name.")
                        }, 100)
                        mistake.play()

                        break;
                    case "correc":
                        victory.play();

                        setTimeout(() => {
                            alert('it Looks like yoUr answer Can be or is a valid Key to mY question')
                            score++

                        }, 100)
                        break;
                    case "end":
                        victory.play();
                        score++
                        setTimeout(() => {
                            alert('Thank you sir' + "   Score: " + score)


                        }, 90)
                        setTimeout(() => {
                            window.location.href="index.htm"
                        }, 100)
                        break;
                    default:
                        setTimeout(() => {
                            alert("It Doesn't seem like It is the correct Or True answer we needed.")
                        }, 100)
                        mistake.play()

                        break;
                }


               
            }
            setTimeout(() => {
                allowAns = true
            }, 1000)
            setTimeout(() => {
                cover.style.pointerEvents = 'none'
            }, 2100)
               

            answering()

        })



        choice.addEventListener("mousedown", () => {
            choice.style.scale = '0.9'
        })
        choice.addEventListener("mouseout", function () {
            choice.style.scale = '1'
            let imgx = this.querySelector('img')

            switch (i) {
                case 0:
                    imgx.src = n1;
                    break;
                case 1:
                    imgx.src = n2;
                    break;
                case 2:
                    imgx.src = n3;
                    break;
                case 3:
                    imgx.src = n4;

            }
        })

        choice.addEventListener("mouseover", function () {

            let imgx = this.querySelector('img')
            console.log("REACHED")
            switch (i) {
                case 0:
                    imgx.src = hov1;
                    break;
                case 1:
                    imgx.src = hov2;
                    break;
                case 2:
                    imgx.src = hov3;
                    break;
                case 3:
                    imgx.src = hov4;

            }
        })
    }
}
answering()

function gimmickNext(choice) {

    choice.addEventListener("click", () => {
        if (allowAns == false) {
            return;
        }
        allowAns = false
        questionCount++
        choice.style.scale = '1'
        timer = timedef;
        countdownDisplay.innerText = timer
        if (choice.classList.contains('right')) {
            victory.play();
            console.log('reached')

            cover.style.pointerEvents = 'all'
            switch (valuex) {

                case "sirjeric":

                default:
                    setTimeout(() => {
                        alert('it Looks like yoUr answer Can be or is a valid Key to mY question')


                    }, 100)
                    break;
            }


        }
        else {
            mistake.play()

            switch (valuex) {

                case "sirjeric":
                    setTimeout(() => {
                        alert("Accurate description BUT we needed the name.")
                    }, 100)
                default:
                    setTimeout(() => {
                        alert("It Doesn't seem like It is the correct Or True answer we needed.")
                    }, 100)
                    break;
            }



        }
        setTimeout(() => {
            allowAns = true
        }, 1000)
        setTimeout(() => {
            cover.style.pointerEvents = 'none'
        }, 2100)


        answering()

    })

}


function gimmickWrong() {
    document.getElementById('grContain').innerHTML = ''

    question.innerHTML = questionArray[0];
    let choiceSrcArray = fullChoiceArray.splice(0, 4);


    for (let n = 0; n < choices.length; n++) {
        let choice = choices[n]
        choice.innerHTML = ''
    }

    questionArray.shift();
    choiceSrcArray.shift()
    choiceSrcArray.shift()
    choiceSrcArray.shift()
    choiceSrcArray.shift()
    allowAns = false
    timer = timedef;
    countdownDisplay.innerText = timer

    alert("It Doesn't seem like It is the correct Or True answer we needed.")


            setTimeout(() => {
                allowAns = true
            }, 1000)
            setTimeout(() => {
                cover.style.pointerEvents = 'none'
            }, 2100)

    questionCount++
    answering()
}

function gimmickRight() {
    document.getElementById('grContain').innerHTML = ''

    question.innerHTML = questionArray[0];
    let choiceSrcArray = fullChoiceArray.splice(0, 4);


    for (let n = 0; n < choices.length; n++) {
        let choice = choices[n]
        choice.innerHTML = ''
    }

    questionArray.shift();
    choiceSrcArray.shift()
    choiceSrcArray.shift()
    choiceSrcArray.shift()
    choiceSrcArray.shift()
    allowAns = false
    timer = timedef;
    countdownDisplay.innerText = timer

    alert("it Looks like yoUr answer Can be or is a valid Key to mY question.")


    setTimeout(() => {
        allowAns = true
    }, 1000)
    setTimeout(() => {
        cover.style.pointerEvents = 'none'
    }, 2100)

    questionCount++
    answering()
}

    
function red() {

    document.getElementById('grContain').innerHTML = `<img src="grin.png" id="grinStart" class="grinc"/>   
                                                      <img src = "grin.png" id="grinEnd" class="grinc" /> 
                                                      <img src="13.png" id="redN" class="grinc" />`

    question.innerHTML = ''

    for (let n = 0; n < choices.length; n++) {
        let choice = choices[n]
        choice.innerHTML = ''
    }
    const redBg = document.getElementById('redN')

    const grinEnd = document.getElementById('grinEnd')

    grinEnd.addEventListener("mouseover", () => {

        gimmickRight()

    })
 

    redBg.addEventListener('mouseover', () => {
        gimmickWrong()
        console.log("AEHUI")
    })


}


function circleClick() {

    questionArray = ["Is this quiz fun?", "What grade will we receive?"]

    question.innerHTML = `Click the circle<img src="circlex.png" id="circ">`
    questionArray.shift();

    const circ = document.getElementById('circ')

    circ.addEventListener('click', () => {
        gimmickRight()
    })

}
   

function answering() {
    qNum.innerText = questionCount;
    console.log(questionCount)

    switch (questionCount) {

        case 2:
            valuex = "clciktrick"
            break;
        case 8:
            valuex = "sirjeric"
            break;
        case 11:
            valuex = "tomove"
            break;
        case 12:
            red()
            return;
            break;
        case 13:

            circleClick();
            return;
            break;
        case 14:
            questionArray = ['Is this quiz fun?', 'What grade will we receive?']
            question.innerHTML = 'Is this quiz fun?'
            valuex = "correc"
            break;
        case 15:
            question.innerHTML = 'What grade will we receive?'
            valuex = "end";

            break;
        case 16:
            qNum.innerHTML = 'Nice';
            break;
        default:
            valuex = "";
            break;

    }


    
    
    if (fullChoiceArray.length < 4 || ansKeyArray.length < 1) { return; }

    if (valuex == "clciktrick") {
        question.innerHTML = `${questionArray[0]} <button class="right" onclick="gimmickNext(this)"> correct answer </button>`
        console.log("HETAPG")
    }
    else {
        question.innerHTML = questionArray[0];
    }
    questionArray.shift();
    let choiceSrcArray = fullChoiceArray.splice(0, 4);

    choiceSrcArray.sort(() => Math.random() - 0.5);


    for (let n = 0; n < choices.length; n++) {
        let choice = choices[n]


        choice.classList = '';

        switch (n) {
            case 0:
                n1 = choiceSrcArray[0];
                hov1 = (choiceSrcArray[0].split('.')[0]) + 'hover.png'
                break;
            case 1:
                n2 = choiceSrcArray[0];
                hov2 = (choiceSrcArray[0].split('.')[0]) + 'hover.png'
                break;
            case 2:
                n3 = choiceSrcArray[0];
                hov3 = (choiceSrcArray[0].split('.')[0]) + 'hover.png'

                break;
            case 3:
                n4 = choiceSrcArray[0];
                hov4 = (choiceSrcArray[0].split('.')[0]) + 'hover.png'


        }

        if (choiceSrcArray[0] === ansKeyArray[0]) {
            choice.classList.add('right')
        } else { choice.classList.add('wrong') }
        choice.innerHTML = `<img src="${choiceSrcArray[0]}">`;
        choiceSrcArray.shift();


    }
    ansKeyArray.shift()

}



let audio = document.getElementById('audio');
let musicButton = document.getElementById('musicButton');
let musicIcon = document.getElementById('musicIcon');




function toggleMusic() {


    if (audio.paused) {
        audio.play();
        musicIcon.src = "playIcon.png";
    } else {
        audio.pause();
        musicIcon.src = "pauseIcon.png";
    }
}

const timedef = 30
let timer = timedef;
let countdownDisplay = document.getElementById('countdown')

countingDown()
function countingDown() {
    countdownDisplay.innerText = timer
    timer--
    console.log('counting down')

    if (timer > -1) {
        setTimeout(() => { countingDown() }, 1000)
        return;
    }


    mistake.play()
    setTimeout(() => {
        timer = timedef;
        countdownDisplay.innerText = timer
        alert("Time's up")
        questionCount++
    }, 100)

    setTimeout(() => { countingDown() }, 110)
    answering()
}

