function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value; 
    console.log("player 1 name is: ",player1_name);

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    console.log("hello 2");

    window.location="game_page.html";
    
}   








player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("").innerHTML = player1_score;