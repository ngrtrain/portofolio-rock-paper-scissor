const button = document.querySelectorAll('button')
const showuserchoice = document.querySelector('div.content div.user div.userchoiceresult div')
const showoppchoice = document.querySelector('div.content div.opponet div.opponetchoice div')
const choices = document.querySelector('.choice')
const result = document.querySelector('#result')
const buttonfortry = document.getElementById('tryagain')
const ansarr = ['rock','paper','scissor']
let ans= [];
function win(){
    result.innerHTML = 'YOU WIN'
    result.style.backgroundColor = 'green'
}
function lose(){
    result.innerHTML = 'YOU LOSE'
    result.style.backgroundColor = 'red'
}
for(let i = 0; i<button.length-1;i++){
    button[i].addEventListener('click',function(e){
        showuserchoice.innerHTML = button[i].getAttribute('id')
        for(let z = 0; z<button.length-1;z++){
            button[z].disabled = true
        }
        showoppchoice.innerHTML = ansarr[Math.floor(Math.random() * 3)]
        ans = [showuserchoice.innerHTML,showoppchoice.innerHTML]
        if(ans[0] == ans[1]){
            result.innerHTML = 'DRAW'
            result.style.backgroundColor = 'purple'
        }
        else if(ans[0] == 'rock' && ans[1] == 'paper'){
            lose()
        }
        else if(ans[0] == 'paper' && ans[1] == 'rock'){
            win()
        }
        else if(ans[0] == 'rock' && ans[1] == 'scissor'){
            win()
        }
        else if(ans[0] == 'scissor' && ans[1] == 'rock'){
            lose()
        }
        else if(ans[0] == 'paper' && ans[1] == 'scissor'){
            lose()
        }
        else if(ans[0] == 'scissor' && ans[1] == 'paper'){
            win()
        }
        buttonfortry.style.display = 'initial'
    })
}
buttonfortry.addEventListener('click',function(){
    location.reload()
})
