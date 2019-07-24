

$(document).ready(function() {
  //calls $block to be null
  //null means 0(nothing)
  //null = false 
  let hand = null;
  
  //grabs clicked blocks and detaches to the clicked bars
  $('[data-row]').click(function() {
    let currentClick = $(this).children().first().data("size");
    //the size of block that is in your hand
    let lastPick =$(hand).data("size");
    if (hand) {
      //! = not
      // || means or
      //makes you cant put a bigger block on a smaller one
        if(!currentClick || Number(currentClick)>Number(lastPick)){
           $(this).prepend(hand);
          hand = null;
      }
      //if you putt a bigger block on a smaller one, it will say 'wrong selection'
        else{
          console.log("Wrong move");
        }
    } else {
      //grabs the FIRST block in the bar, its detached which its still there but it disappeared
      hand = $(this).children().first().detach();
    }
     //== is a comparison  
    //.winner is the class and also call the div to call all the divs(blocks) in the winner class
    //.length==4 means if there are 4 blocks in winner class then alert winner
    if($(".winner div").length==4) {
    alert("winner");
    }
  })
})

