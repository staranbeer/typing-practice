const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]


//displaying the text we are going to use into the text area
const textBox = "lorem ipsum dolor sit amet consectetur adipisicing elit Recusandae illo rerum ex praesentium at exercitationem placeat Ipsa sapiente dolor quas repellendus ab officia ut tempora alias molestias laborum similique eveniet"
const text = textBox.trim().toLowerCase().split('')
const textArea = document.getElementById('text-box')

text.forEach(i=>{
    const char = document.createElement('span')
    char.innerText = i
    char.className = "char"
    textArea.appendChild(char)
})

const chars = document.getElementsByClassName('char')
let current = 0
let wrongAnswers = 0;
let rightAnswers = 0;
let numberOfChracters = text.length;

const right = document.getElementById('right')
const wrong = document.getElementById('wrong')
const total = document.getElementById('total')
//changing the style of the keys based on key up and key down events

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

//a helper function to check if the key is a valid character

function findKey(key){
    for(let i = 0; i< alphabet.length; i++){
        if(key.toString() == alphabet[i]){
            return true
        }
    }
    return false
}

// key up and key down handlers

function keyDownHandler(e){
    //if the key pressed is valid change the background color
    if(findKey(e.key)){
        keydownStyle(e);
    }

    //if the key key pressed is the current key they change it to green
    //else change it to red
    if(chars[current].innerText == e.key.toString()){
        chars[current].style.color = "rgb(147, 255, 86)"
        rightAnswers++
        right.innerText = rightAnswers

    }else{
        chars[current].style.color = "rgb(255, 95, 83)"
        wrongAnswers++;
        wrong.innerText = wrongAnswers
    }
    current++
    console.log(`right: ${rightAnswers}, wrong: ${wrongAnswers}`)

}

function keyUpHandler(e){
    //if the key pressed is valid change the background color
    if(findKey(e.key)){
        keyUpStyle(e) 
    } 
    
}

document.addEventListener('keydown', keyDownHandler)
document.addEventListener('keyup', keyUpHandler)

