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
