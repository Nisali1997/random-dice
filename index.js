




document.getElementById('btn').addEventListener('click', function() {
    //var die1 = Math.floor(Math.random() * 6) + 1;
    //var die2 = Math.floor(Math.random() * 6) + 1;
    
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;


    var randomDiceImage = "dice" + randomNumber1 + ".png"//dice1.png - dice6.png
    var randomImageSource1 = "images/"+ randomDiceImage;
    var randomImageSource2 = "images/dice" + randomNumber2 +".png";   

    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];


    image1.setAttribute("src", randomImageSource1);
    image2.setAttribute("src", randomImageSource2);
    
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins ";
    }else if(randomNumber2 > randomNumber1){
        document.querySelector("h1").innerHTML = "Player 2 wins ";
    }else{
        document.querySelector("h1").innerHTML = "Draw";
    }

    
});