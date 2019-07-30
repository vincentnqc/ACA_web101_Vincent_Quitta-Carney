var data = {
  totalRevs:360, 
  totalCurrent:0, 
  totalRPS: 0
};

setInterval(goGo,1000);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  $("#pepe").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
}
// function gogo means the total revs plus total rps value
// data total current is equal to it's value plus the total rps
//pepe's transformation is to rotate by the total RPS
 

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS/70.4).toFixed(3));
}
//current total in css is displayed at the total current in the js
//same with the rps

$("#pepe").click(function (){
  data.totalRevs ++;
  data.totalCurrent ++;
  updateReport();
})
//click on pepe and it adds to the total revs and total current which is displayed on screen

$(".button").click(function (){ 
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalRPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
  }
  updateReport();
})
//value of the total current vlue and subtract what the cost is and then the new total current is displayed
//total rps increases by the value
//all the othere buttons will have the same effect when click on and the total cost of the button will increse by 1.15 percent each time it is clicked