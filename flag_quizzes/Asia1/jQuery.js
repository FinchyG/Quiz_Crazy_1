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
        
      var inputConetent = document.getElementById('flag1').value;
      var country1      = inputConetent.trim();  
      
      if(country1 == "China" || country1 == "china"){
        $("#correct1").show();
        $("#incorrect1").hide();
      } else {
        $("#incorrect1").show();
        $("#correct1").hide();
      }
  
    }
  
  
    function question2() {        
          
        var inputConetent = document.getElementById('flag2').value;
        var country2      = inputConetent.trim();

        if(country2 == "Laos" || country2 == "laos"){
          $("#correct2").show();
          $("#incorrect2").hide();
        } else {
          $("#incorrect2").show();
          $("#correct2").hide();
        }
      
      }
  
      function question3() {
          
        var inputConetent = document.getElementById('flag3').value;
        var country3      = inputConetent.trim();

        if(country3 == "Myanmar" || country3 == "myanmar"){
          $("#correct3").show();
          $("#incorrect3").hide();
        } else {
          $("#incorrect3").show();
          $("#correct3").hide();
        }
      
      }
  
      function question4() {
          
        var inputConetent = document.getElementById('flag4').value;
        var country4      = inputConetent.trim();

        if(country4 == "South Korea" || country4 == "south korea" || country4 == "South korea" || country4 == "south Korea"){
          $("#correct4").show();
          $("#incorrect4").hide();
        } else {
          $("#incorrect4").show();
          $("#correct4").hide();
        }
      
      }
  
      function question5() {
          
        var inputConetent = document.getElementById('flag5').value;
        var country5      = inputConetent.trim();

        if(country5 == "Indonesia" || country5 == "indonesia"){
          $("#correct5").show();
          $("#incorrect5").hide();
        } else {
          $("#incorrect5").show();
          $("#correct5").hide();
        }
      
      }

//code for getting answers

$("#getCaptionAnswers").click(function() {
  $('figcaption').show();
})
  