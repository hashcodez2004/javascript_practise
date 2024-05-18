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
}, 1000)```