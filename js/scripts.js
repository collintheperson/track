$(function() {
   $("#formID").submit(function(event) {
     var answer = $("input:radio[name=radio1]:checked").val();
     var answer2 =$("input:radio[name=radio2]:checked").val();
     var answer5 =$("input:radio[name=radio5]:checked").val();

     if (answer === "php1"){
       $("#php").show();
     }else if (answer === "c#1") {
       $("#csharp").show();
     }else if (answer === "java1") {
       $("#java").show();
     }else if(answer === "ruby1") {
       $("#ruby").show();
    }
      if (answer2 === "money")  {
        $(".money").show();
      }
    if (answer5 === "school1") {
        $(".school").show();
    }  else if (answer5 === "online1")  {
      $(".online") .show();
    } else if (answer5 === "bootcamp1") {
        $(".bootcamps").show();
    }


      event.preventDefault();

  });
});
