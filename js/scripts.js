$(function() {
   $("#formID").submit(function(event) {
     var answer = $("input:radio[name=radio1]:checked").val();
      //So set a variable equal to the value of one. $().val(). So i have a variable tbis variable equals this string do this statement.
      alert(answer)
     if (answer === "php1"){
      //  alert("this work")
       $("#php").show();
     }
    //    $("#php").show();
    //   alert(answer)
    //  }


      event.preventDefault();

  });
});
