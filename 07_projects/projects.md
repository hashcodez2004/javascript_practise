# projects related to DOM -> full list
## Project link
[thoko](https://stackblitz.com/edit/dom-project-chaiaurcode)

# Solution code

## project 1
```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})
```
## Project 2
```javascript
const form = document.querySelector('form')
form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Give valid height ${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Give valid weight ${weight}`
  }
  else{
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    var halaat;
    if(BMI<18.6){
      halaat="Underweight";
    }
    else if(BMI>18.6&&BMI<24.9){
      halaat="Normal";
    }
    else halaat="Overweight";
    results.innerHTML = `<span>BMI is: ${BMI} <br>
    You are ${halaat}</span>`
  }
})
```
## Project 3
```Javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString() //can display in various formats using the date.----any function
}, 1000)
```

## Project 4
```Javascript
let randomNumber = Math.floor(Math.random()*100) + 1

const submit = document.querySelector('#subt') //submit button
const userInput = document.querySelector('#guessField') //input space
const guessSlot = document.querySelector('.guesses') //previous guesses
const remaining = document.querySelector('.lastResult') //remaining guesses
const lowOrHigh = document.querySelector('.lowOrHi') //where to display low or high
const startOver = document.querySelector('.resultParas') //taking full control of whole div including prevGuesses and remGuesses

const p = document.createElement('p') //we have created a paragraph element and append it to some existing element later as per req

let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault() //submit dbaate hi page reload ho jaata hai...so to prevent that
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){ //is input value valid or not
  if(isNaN(guess)){
    alert('Enter a valid number')
  }
  else if(guess < 1 || guess > 100){
    alert('Enter number in range')
  }
  else{
    if(numGuess === 11){ //if it was the last trial
      displayGuess(guess)
      displayMessage(`GAME OVER---> Random number was ${randomNumber}`)
      endGame()
    }
    else{ //not the last trial
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){ //what message to print
  if(guess === randomNumber){
    displayMessage(`!!CONGRATULATIONS!!`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Guess Higher`)
  }
  else{
    displayMessage(`Guess Lower`)
  }
}

function displayGuess(guess){ //updation of prevGuesses and remGuesses
  userInput.value = '' //make it empty
  guessSlot.innerHTML += `${guess}, `
  numGuess += 1
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '') //becomes unmodifiable and non-interactive, meaning users cannot focus,type,click on it.
  p.classList.add('button') //This line adds the class button to the element p.
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = Math.floor(Math.random()*100) + 1
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```
## Project 6
```javascript
//function to generate random color
function randomColor(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i=0; i<6; i++){ //hex colour representation has 6 values only
    color += hex[Math.floor(Math.random()*16)]
  }
  return color
}

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
```