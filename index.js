              /* FOR FIRST DICE */
var randomnumber1 = Math.floor(Math.random()*6)+1;//give random 0-6
var randomdiceimg = "dice" + randomnumber1 + ".png";//this give us random dice image dice1.png to dice6.png
var randomimagesource = "image/"+ randomdiceimg;// this give us random image from image folder fom dice1.png to dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


            /* FOR SECOND DICE */
var randomnumber2 = Math.floor(Math.random()*6)+1;//give random 0-6
var randomdiceimg2 = "dice" + randomnumber2 + ".png";//this give us random dice image dice1.png to dice6.png
var randomimagesource2 = "image/"+ randomdiceimg2;// this give us random image from image folder fom dice1.png to dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="🎉player 1 win";
}
else if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML="🎉player 2 win";
}
else{
    document.querySelector("h1").innerHTML="✨Match Draw";
}