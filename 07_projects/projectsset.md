# Projects related to DOM

## project links
[Hitesh Choudhary](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

[My stackblitz](https://stackblitz.com/@mi8guy) 

# Solution code

## project 1 -- Background color changer

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

## project 2 -- BMI calculator

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

## project 3  -- clock

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4 -- random number guesser

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // Validate guess Number lies within the range or not
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // Check for guess correctness.
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low `);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO high `);
  }
}

function displayGuess(guess) {
  // cleanup
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // display a message on the DOM.
  // Append Prev guesses array.
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```


## project 5  -- key tracker

```javascript
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = "color">
  <table>
    <thead>
      <th> Key
      <th> Keycode
      <th> Code
    </thead> 
    <tr>  
      <td>${e.key === ' ' ? 'Space' : e.key}
      <td>${e.keyCode}
      <td>${e.code}
    </tr>
  </table> 
  </div>
  `;
});

```

## project 6 -- random color 

```javascript
const randomColor = function () {
  let color = '#';
  const hex = '0123456789ABCDEF';

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color += hex[randomIndex];
  }

  return color;
};

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

## project 7  -- todo list
```javascript

const input = document.querySelector('#entry');
const submit = document.querySelector('#subt');
const ul = document.querySelector('#todolist');

submit.addEventListener('click', function (e) {
  e.preventDefault();
  if (input.value !== '') {
    let li = document.createElement('li');
    li.classList.add('list-item');
    li.textContent = input.value;
    ul.prepend(li);
    input.value = '';
  }
});

ul.addEventListener('click', function (e) {
  if (e.target && e.target.matches('li.list-item')) {
    let li = e.target;
    // console.log(li)
    ul.removeChild(li);
  }
});

```
