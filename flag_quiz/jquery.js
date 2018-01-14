//$("#submit").click(function(){
  
  //if(country == "France") {
  
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
      
      var country1 = document.getElementById('flag1').value;
      
      if(country1 == "France" || country1 == "france"){
      $("#correct1").show();
      $("#incorrect1").hide();
      } else {
      $("#incorrect1").show();
      $("#correct1").hide();
      }

    }


    function question2() {        
        
        var country2 = document.getElementById('flag2').value;
        
        if(country2 == "Greece" || country2 == "greece"){
        $("#correct2").show();
        $("#incorrect2").hide();
        } else {
        $("#incorrect2").show();
        $("#correct2").hide();
        }
    
      }

      function question3() {
        
        var country3 = document.getElementById('flag3').value;
        
        if(country3 == "Austria" || country3 == "austria"){
        $("#correct3").show();
        $("#incorrect3").hide();
        } else {
        $("#incorrect3").show();
        $("#correct3").hide();
        }
    
      }

      function question4() {
        
        var country4 = document.getElementById('flag4').value;
        
        if(country4 == "Italy" || country4 == "italy"){
        $("#correct4").show();
        $("#incorrect4").hide();
        } else {
        $("#incorrect4").show();
        $("#correct4").hide();
        }
    
      }

      function question5() {
        
        var country5 = document.getElementById('flag5').value;
        
        if(country5 == "Germany" || country5 == "germany"){
        $("#correct5").show();
        $("#incorrect5").hide();
        } else {
        $("#incorrect5").show();
        $("#correct5").hide();
        }
    
      }
