$(function() {

  let $list = $('ul');
  let $newItemForm = $('#newItemForm');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    if(text=="")
    {
      alert("please enter text");
    }
    else
  {$list.append(`<li>${text}</li>`);
  $('input[type="text"]').val('');

  }
    
  });

  $list.on('click', 'li', function() {
    let $this = $(this);
    $this.remove();
  });

});