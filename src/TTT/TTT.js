// in HTML
// create 3x3 grid


// in JS
//onClick insert O or X depending on previous click
//var player1, var player2, var previousClick

console.log('hey')
var name = 'Beyonce'
var box = document.querySelector('.box')
var allBoxes = document.querySelectorAll('.box')
console.log('allBoxes', allBoxes)
box.onclick = function setXO(event) {
  console.log('hey bud', event)
  event.target.innerText = 'O'
}
function playTicTacToe(element) {
  console.log('hey event', element)
}