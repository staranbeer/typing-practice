const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]

const textArea = document.getElementById('text-box')
const total = document.getElementById('total')  

//displaying the text we are going to use into the text area

const textBox = ["est natus enim nihil est dolore omnis voluptatem numquam net omnis occaecati quod ullam at nvoluptatem error expedita pariatur nnihil sint nostrum voluptatem reiciendis et", 
"quia molestiae reprehenderit quasi aspernatur naut expedita occaecati aliquam eveniet laudantium nomnis quibusdam delectus saepe quia accusamus maiores nam est ncum et ducimus et vero voluptates excepturi deleniti ratione",
"non et atque noccaecati deserunt quas accusantium unde odit nobis qui voluptatem nquia voluptas consequuntur itaque dolor net qui rerum deleniti ut occaecati",
"harum non quasi et ratione ntempore iure ex voluptates in ratione nharum architecto fugit inventore cupiditate nvoluptates magni quo et"
]

let currentText = 0

const button = document.getElementById('start')
const chars = document.getElementsByClassName('char')
let wrongAnswers = 0;
let rightAnswers = 0;
let numberOfChracters = textBox[currentText].length;

const right = document.getElementById('right')
const wrong = document.getElementById('wrong')


//the main code is enclosed in this handler
//start capturing keyboards inputs when the start button is clicked
function changeText(){
    let current = 0

    handleEvents = true
    right.innerText = 0
    wrong.innerText = 0
    //make sure the text box is empty before changing the text
    while(textArea.firstChild){
        textArea.removeChild(textArea.firstChild)
    }
    
    //change the button text on the first try
    let beginning = true;
    if(beginning){
        document.getElementById('start').innerText = "Next"
        beginning = false
    }
    if(currentText < textBox.length -1) {
        currentText++

    }else{
        currentText = 0
    }

    //displaying the text inside the textbox

    const text = textBox[currentText].trim()
    .toLowerCase()
    .split('')

    total.innerText = text.length
    text.forEach(i=>{
        const char = document.createElement('span')
        char.innerText = i
        char.className = "char"
        textArea.appendChild(char)
    })
    
    //handling keyboard events
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)

    // key up and key down handlers

    function keyDownHandler(e){
        //if the key pressed is valid change the background color
        if(findKey(e.key)){
            keydownStyle(e);
        
            if(chars[current].innerText == e.key.toString()){
                chars[current].style.color = "rgb(147, 255, 86)"
                rightAnswers++
                right.innerText = rightAnswers
        
            }else{
                chars[current].style.color = "rgb(255, 95, 83)"
                wrongAnswers++;
                wrong.innerText = wrongAnswers
            }
        
        }

        //if the key key pressed is the current key they change it to green
        //else change it to red
        current++

    }

    function keyUpHandler(e){
        //if the key pressed is valid change the background color
        if(findKey(e.key)){
            keyUpStyle(e) 
        } 
        
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

    //changing the style of the keys based on key up and key down events

    function keydownStyle(e){
            if(e.key == " "){
                character = document.getElementById('spacebar')
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
            }
            else{
                character = document.getElementById(e.key.toString())
            }

            character.style.backgroundColor = "rgba(94, 89, 89, 0.445)"
            character.style.color = "#ffffff"
    }

}

var handleEvents = false
button.addEventListener('click', changeText)