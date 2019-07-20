let turn="X";
let lis=$("li");

//hover when hovered over the squares
$(".square").hover(function(){
  $(this).addClass("hover");
//removed hover when not hovering over the squares
}, function() {
  $(this).removeClass("hover");
     })
//clicks X in boxes (turn is 'X')
$(".square").click(function() {
  if ( $(this).text()==""){
  $(this).addClass(turn).text(turn);
  //if clicked first time 'X', the next click is 'O' 
  if(turn == "X"){
    turn = "O";
  //alternates with 'X' and 'O'
  } else {
    turn="X";
  }
  //calls alert window to win
    // alert("Hello! I am an alert box!!");
    // alert("Hello! I am an alert box!!");
    // console.log("after endgame call")
  console.log(endGame());
  // console.log("after endgame call")  
    
    // RESET();
  }
})


//tells the browser that your restting something when you click on reset
$("#reset").click(reset);
// alert("Hello! I am an alert box!!");
//resets game when clicked on 'reset' button
function reset() {
  $.each(lis, function() {
    $(this).text("").removeClass("O").removeClass("X");
  })
  turn = "X"
}


//[] is an array!!
//all the combinations of the wins for the game
let winState=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// alert("Hello! I am an alert box!!");

function endGame() {
  // alert("Hello! I am an alert box!!");
  // console.log("in endgame")
  //gets through all individual lists ^
//a is number so if a = 0 then the number starts at 0
  for (let a=0; a<winState.length; a++) {
    // console.log("in outer loop")
    //the tally variable created for tracking which letter is in which box
    //if tally = 3 or -3, that person wins
    let tally=0;
    //running through each individual number 
    for (let b=0; b<winState[a].length; b++) {
      // console.log("in inner loop")
      if($(".square")[winState[a][b]].text()=="X"){
        tally++
      }
      // alert("Hello! I am an alert box!!");
      // console.log("X win")
    // return tally
      else if($(".square")[winState[a][b]].text()=="0"){
        tally--
      }
      // console.log("O win")
    // return tally
    }
    // alert("Hello! I am an alert box!!");
    // console.log("win")
    // return tally
  }
  // alert("Hello! I am an alert box!!");
}
  //targeting which list item, go to winState list and get the numbers, and then see 
    //if an "X" is in that box(number), if true, you win
      // if ($(lis[winState[a][b]]).text() == "X" ){
      //   tally++;
      // } else if($(lis[winState[a][b]]).text() == "O" )
      //   tally--;
    // }
  
  
  

  //alert window pops up when either X or O wins 3 in a row
    
    // if(tally==0) {
    //   window.alert("Winner!");
    // RESET();
    // }
           
  
  
//         var cp1 = 1;

//         function displayMarker(allSquares) {

//             if (document.getElementById(allSquares).innerHTML != "") {
//                 alert("Choose another square");
//             }
//             else {

//                 if (cp1 == 1) {
//                     document.getElementById(allSquares).innerHTML = "X";
//                     cp1 = 2;
//                 }

//                 else {
//                     document.getElementById(allSquares).innerHTML = "O";
//                     cp1 = 1;
//                 }
//             }
//             checkEmpty();
//         }

//         function checkEmpty() {

//             var anyEmpty = false;
//             for (var i = 1; i <= 9; i++) {
//                 if (document.getElementById('square' + i).innerHTML == "") {
//                    anyEmpty = true;
//                 }
//             }

//             if (!anyEmpty)
//                 alert("All squares filled!");

//              resetButton();
//         }

//         function resetButton() {

//             var button = document.createElement("button");
//             button.innerHTML = "Reset";



//             button.addEventListener("click", function () {
//                 alert("Board Reset");
//             });
//         