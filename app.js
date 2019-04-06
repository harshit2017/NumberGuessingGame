// Generate Random Number
const randNum = Math.floor(Math.random() * 100 + 1)
// Count the number of guesses
var countGuess = 1

// Select the element using dom selectors
const form=document.getElementById("form")
const input=form["number"]
input.focus()

form.addEventListener("submit",function(e){
    event.preventDefault()

    const inputNum=Number(form["number"].value)
    console.log(randNum)

    if(inputNum == randNum)
    {
    alert(`You guessed the number correctly in ${countGuess} times.`)    
    }

    else
    {
        alert("Try Again !!")
    }
    ++countGuess
    input.value=''
    input.focus()
})


