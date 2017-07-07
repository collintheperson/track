$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr("id") == 'radio') {
            $('.q2').hide();
       }
       else {
            $('.q1').show();
       }
   });
