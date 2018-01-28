$(document).ready(
  $("#submit").click(function() {
    question1();
    question2();
    question3();
    question4();
    question5();
  })
);
  
  function question1() {
      
    var inputContent = document.getElementById('flag1').value;
    var country1     = inputContent.trim();
    
    if(country1 == "France" || country1 == "france"){
      $("#correct1").show();
      $("#incorrect1").hide();
    } else {
      $("#incorrect1").show();
      $("#correct1").hide();
    }

  }


  function question2() {        
        
      var inputContent = document.getElementById('flag2').value;
      var country2     = inputContent.trim();
        
      if(country2 == "Greece" || country2 == "greece"){
        $("#correct2").show();
        $("#incorrect2").hide();
      } else {
        $("#incorrect2").show();
        $("#correct2").hide();
      }
    
    }

    function question3() {
        
      var inputContent = document.getElementById('flag3').value;
      var country3     = inputContent.trim();

      if(country3 == "Austria" || country3 == "austria"){
        $("#correct3").show();
        $("#incorrect3").hide();
      } else {
        $("#incorrect3").show();
        $("#correct3").hide();
      }
    
    }

    function question4() {
        
      var inputContent = document.getElementById('flag4').value;
      var country4     = inputContent.trim();

      if(country4 == "Italy" || country4 == "italy"){
        $("#correct4").show();
        $("#incorrect4").hide();
      } else {
        $("#incorrect4").show();
        $("#correct4").hide();
      }
    
    }

    function question5() {
        
      var inputContent = document.getElementById('flag5').value;
      var country5     = inputContent.trim();

      if(country5 == "Germany" || country5 == "germany"){
        $("#correct5").show();
        $("#incorrect5").hide();
      } else {
        $("#incorrect5").show();
        $("#correct5").hide();
      }
    
    }

//code for getting answers

$(document).ready(
  $("#get_flag_answers").click(function() {
    $('.flag_name').show();
  })
);