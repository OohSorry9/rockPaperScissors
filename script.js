// Initialzing the Variables
const selection = document.getElementById('selection')
const userSelect = document.getElementById('userSelect')
const botSelect = document.getElementById('botSelect')
const startBtn = document.getElementById('start')
const result = document.getElementById('resultText')
const items = Array.from(document.getElementsByClassName('item1'))
const winnerSpan = document.getElementById('winnerIs')
const winner = document.getElementById('winner')

let Selcted = false;
let win;
let lose;
let draw;


items.forEach(item => {
    item.addEventListener('click', () => {
        userSelect.src = item.src
        userSelect.alt = item.alt
    })
})

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        new Audio('assets/pop.mp3').play()
    })
})

startBtn.addEventListener('click', () => {

    if (userSelect.alt == 'undefined') {
        result.innerText = 'Please Select Before Starting'
       Selcted = false
    }
    else{
        Selcted = true
        result.innerText = 'Bot Is Choosing...'
    }
    setTimeout(() => {

        let random = Math.floor(Math.random() * 3) + 1

        console.log(random)

        //Bot Picker
        if (Selcted && random == 1) {
            botSelect.src = 'assets/rock.png'
            botSelect.alt = 'rock'
        }
        if (Selcted && random == 2) {
            botSelect.src = 'assets/paper.png'
            botSelect.alt = 'paper'
        }
        if (Selcted && random == 3) {
            botSelect.src = 'assets/scissors2.png'
            botSelect.alt = 'scissor'
        }

        //Processor


        if (userSelect.alt == 'rock' && botSelect.alt == 'paper') {
            result.innerText = 'You Lose..'
            winnerSpan.innerText = 'Winner Is'
            winner.style.opacity = 1;
            winner.src = 'assets/paper.png'
            
            lose = true
        }
        if (userSelect.alt == 'rock' && botSelect.alt == 'scissor') {
            result.innerText = 'You Win!'
            winnerSpan.innerHTML = 'Winner Is'
            winner.style.opacity = 1;
            winner.src = 'assets/rock.png'
            win = true
        }
        if (userSelect.alt == 'paper' && botSelect.alt == 'rock') {
            result.innerText = 'You Win!'
            winnerSpan.innerText = 'Winner Is'
            winner.style.opacity = 1;
            winner.src = 'assets/paper.png'
            win = true
        }
        if (userSelect.alt == 'paper' && botSelect.alt == 'scissor') {
            result.innerText = 'You Lose..'
            winnerSpan.innerText = 'Winner Is'
            winner.style.opacity = 1;
            winner.src = 'assets/scissors2.png'
            lose = true
        }
        if (userSelect.alt == 'scissor' && botSelect.alt == 'paper') {
            result.innerText = 'You Win!'
            winnerSpan.innerText = 'Winner Is'
            winner.style.opacity = 1;
            winner.src = 'assets/scissors2.png'
            win = true
        }
        if (userSelect.alt == 'scissor' && botSelect.alt == 'rock') {
            result.innerText = 'You Lose..'
            winnerSpan.innerText = 'Winner Is'
            winner.style.opacity = 1;
            winner.src = 'assets/rock.png'
            lose = true
        }
        if (Selcted && userSelect.alt == botSelect.alt) {
            result.innerText = 'ITS A DRAW XD'
            winnerSpan.innerText = 'Winner Is'
            winner.style.opacity = 1;
            winner.src = 'assets/barrier.png'
            draw = true
        }

        //Sound EFX

        if(win) {
            console.log('playing audio...')
            new Audio('assets/win.mp3').play()
            win = false
        }
        
        if(lose){
            console.log('playing audio...')
            new Audio('assets/lose.mp3').play()
            lose = false
        }
        if(draw){
            console.log('playing audio...')
            new Audio('assets/draw.mp3').play()
            draw = false
        }

    }, 1500)



})

