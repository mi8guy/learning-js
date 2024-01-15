# Projects related to DOM

## project links
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  
  button.addEventListener("click", function(e){
    if(e.target.id){
      body.style.backgroundColor = e.target.id
    }
  })
})
```

## project 2

```javascript
const form = document.querySelector("form")
const results = document.querySelector('#results')
//this use case will give you empty vaue
// const height = parseInt(document.querySelector('#height').value) 

form.addEventListener("submit", function(e){
  e.preventDefault() // prevent form submition
  const height = parseInt(document.querySelector('#height').value) 
  const weight = parseInt(document.querySelector('#weight').value)

  if(height === "" || height < 0 || isNaN(height))  {
    results.innerHTML = `Please give a valid height ${height}`
  } else if(weight === "" || weight < 0 || isNaN(weight))  {
    results.innerHTML = `Please give a valid weight ${weight}`
  } else {
    const bmi = (weight / ((height*height) / 10000)).toFixed(2)
    let bmiType
    if(bmi < 18.6){
      bmiType = "You are Underweight"
    } else if(bmi >=18.6 && bmi <=24.9){
      bmiType = "Your weight is Normal"
    } else if(bmi > 24.9){
      bmiType = "You are Overweight"
    }
    results.innerHTML = `<span>${bmi}. ${bmiType}</span>`
  }

})
```

## project 3 

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
