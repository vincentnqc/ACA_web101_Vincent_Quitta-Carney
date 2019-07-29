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
// function gogo means the total revs plus the total RPS is also

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS/70.4).toFixed(3));
}


$("#pepe").click(function (){
  data.totalRevs ++;
  data.totalCurrent ++;
  updateReport();
})

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