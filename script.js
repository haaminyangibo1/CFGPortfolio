// //Prompting user for their name

// function sayHello (){
//     const name = prompt("What is your name?")
//     alert("Hello " + name + " Welcome to my website.");
// }

// sayHello();

// //rolling a dice to give a random number 

// function rollDice() {
//     let dice = Math.floor(Math.random() * 6 ) + 1;
//     alert("You have rolled a " + dice + '!')

// }

// rollDice()

// //How long will it take to get first developre job
// function jobSearch(){
//     let months = 0 
//     let dice = Math.floor(Math.random() * 6 ) + 1;

//     months += dice

//     alert("It will take you " + months + " months to get your first developer job")

//     console.log("hello this is the console log")
// }
// jobSearch()

function darkMode(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.backgroundImage = "none";
    document.getElementById('projects').style.color = "blue"
}
