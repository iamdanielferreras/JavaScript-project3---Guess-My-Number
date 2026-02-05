/*
 console.log(username); 
username = prompt("what is your username:");
username = Elert("what is your username:");
document.getElementById("mySubmit").onclick = function(){ }
document.getElementById("myH1").textContent = `Welcome ${username}`;
let price = document.getElementById("price").value;

subResult.textContent = `You are Subcribed`;
mySubmit.onclick = function(){
price = Number(price);

if (condition) {
    // This code runs if the condition is TRUE
} else {
    // This code runs if the condition is FALSE
}
*/// 1. Kunin ang mga Elements (Wag palitan ang laman nito ng numero)
const minInput = document.getElementById("minNumber");
const maxInput = document.getElementById("maxNumber");
const myH1 = document.getElementById("myH1");
const myBtn = document.getElementById("myBtn");

// 2. Mga variables na dapat "global" o nasa labas para hindi mawala
let answer;
let runs = false;
let attempts = 1;

myBtn.onclick = function(){
    // 3. Kunin ang values tuwing click (para updated)
    let min = Number(minInput.value);
    let max = Number(maxInput.value);

    // 4. GENERATE: Kung hindi pa nagsisimula, bumunot ng number
    if (!runs){
        answer = Math.floor(Math.random() * (max - min + 1) + min);
        runs = true;
        console.log("Secret Answer is: " + answer ); // Secret peep!
        myH1.textContent = "Game Started! Hula na!";
        attempts ++;
    }

    // 5. GUESSING: Ito ang dapat mangyari sa bawat click (o after setup)
    let guestNumber = Number(window.prompt(`Hula mula ${min} hanggang ${max}:`));

    // 6. LOGIC: I-check ang hula
    if (guestNumber > answer){
        myH1.textContent = "Too High! 👆";
        myH1.style.color = "red";
    }
    else if (guestNumber < answer){
        myH1.textContent = "Too Low! 👇";
        myH1.style.color = "orange";
    }
    else if (guestNumber === answer) {
        myH1.textContent = `You are Correct! Ang number ay ${answer} 🎉You took ${attempts} attempts`;
        myH1.style.color = "green";
        runs = false; // Ibalik sa false para pwedeng mag-start uli ng bagong game
    }
    else{
        myH1.textContent = "Invalid Number! ";
        myH1.style.color = "red";
        runs = false; 
    }
}
