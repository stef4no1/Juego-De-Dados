let randomNumber1 = Math.floor(Math.random() * 6) + 1; 

let randomDiceImage = "dice" + randomNumber1 + ".png"; 

let randomImageSource = "assets/" + randomDiceImage; 

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "assets/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥳 Jugador 1 Ganó!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Jugador 2 Ganó! 🥳";
}
else {
    document.querySelector("h1").innerHTML = "Empate!";
}