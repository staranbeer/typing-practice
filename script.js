const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "Backspace", " "]
const textBox = "this is a sample paragraph that we are going to use to check if our algorthm works or not even though i know it could take a long time to check if it works or not however i cannot rest easy until i do so as it is one of my projects that i can use on my portfolio"
const text = textBox.split('')
const textArea = document.getElementById('text-box')
let current = 0

text.forEach(i=>{
   const char = document.createElement('span')
   char.innerText = i
    char.className = "char"
    textArea.appendChild(char)
})

const chars = document.getElementsByClassName('char')
console.log(chars[0])
console.log(text)

function keydownStyle(e){
        if(e.key == " "){
            character = document.getElementById('spacebar')
        }else if(e.key == "Backspace"){
            character = document.getElementById('backspace')
        }
        else{
            character = document.getElementById(e.key.toString())
        }

        character.style.backgroundColor = "#f2f3f4"
        character.style.color = "#000000"
}

function keyUpStyle(e){
        if(e.key == " "){
            character = document.getElementById('spacebar')
        }else if(e.key == "Backspace"){
            character = document.getElementById('backspace')
        }
        else{
            character = document.getElementById(e.key.toString())
        }

        character.style.backgroundColor = "rgba(94, 89, 89, 0.445)"
        character.style.color = "#ffffff"
}


function findKey(key){
    for(let i = 0; i< alphabet.length; i++){
        if(key.toString() == alphabet[i]){
            return true
        }
    }
    return false
}





function keyDownHandler(e){
    if(findKey(e.key)){
        keydownStyle(e);
    }

    if(chars[current].innerText == e.key.toString()){
        chars[current].style.color = "#00FF00"
    }else{
        chars[current].style.color = "#fe0000"
    }
    current++
}


function keyUpHandler(e){

    if(findKey(e.key)){
        keyUpStyle(e) 
    } 
    
}


document.addEventListener('keydown', keyDownHandler)
document.addEventListener('keyup', keyUpHandler)