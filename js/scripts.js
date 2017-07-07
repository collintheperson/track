$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'optionsRadios17') {
            $('#radio').show();
       }

       else {
            $('.rq2').show();
       }
   });
  $(".btn").click(function()  {
    $(".text").hide();
    $("#language").show();
  });
});
