//code for submitting answers

function submit() {
  question1();
  question2();
  question3();
  question4();
  question5();
}
    
function question1() {
    
  var inputConetent = document.getElementById('flag1').value;
  var country1      = inputConetent.trim().toUpperCase();
  var correct1      = document.getElementById('correct1');
  var incorrect1    = document.getElementById('incorrect1');  
  
  if(country1 == "JAPAN"){
    correct1.style.visibility   = "visible";
    incorrect1.style.visibility = "hidden";
  } else {
    incorrect1.style.visibility = "visible";
    correct1.style.visibility   = "hidden";
  }
  
}
  
function question2() {        
      
  var inputConetent = document.getElementById('flag2').value;
  var country2      = inputConetent.trim().toUpperCase();
  var correct2      = document.getElementById('correct2');
  var incorrect2    = document.getElementById('incorrect2');

  if(country2 == "VIETNAM"){
    correct2.style.visibility   = "visible";
    incorrect2.style.visibility = "hidden";
  } else {
    incorrect2.style.visibility = "visible";
    correct2.style.visibility   = "hidden";
  }
    
}
  
function question3() {
    
  var inputConetent = document.getElementById('flag3').value;
  var country3      = inputConetent.trim().toUpperCase();
  var correct3      = document.getElementById('correct3');
  var incorrect3    = document.getElementById('incorrect3');

  if(country3 == "BANGLADESH"){
    correct3.style.visibility   = "visible";
    incorrect3.style.visibility = "hidden";
  } else {
    incorrect3.style.visibility = "visible";
    correct3.style.visibility   = "hidden";
  }
      
}
  
function question4() {
    
  var inputConetent = document.getElementById('flag4').value;
  var country4      = inputConetent.trim().toUpperCase();
  var correct4      = document.getElementById('correct4');
  var incorrect4    = document.getElementById('incorrect4');

  if(country4 == "THAILAND"){
    correct4.style.visibility   = "visible";
    incorrect4.style.visibility = "hidden";
  } else {
    incorrect4.style.visibility = "visible";
    correct4.style.visibility   = "hidden";
  }

}
  
function question5() {
    
  var inputConetent = document.getElementById('flag5').value;
  var country5      = inputConetent.trim().toUpperCase();
  var correct5      = document.getElementById('correct5');
  var incorrect5    = document.getElementById('incorrect5');

  if(country5 == "PAKISTAN"){
    correct5.style.visibility   = "visible";
    incorrect5.style.visibility = "hidden";
  } else {
    incorrect5.style.visibility = "visible";
    correct5.style.visibility   = "hidden";
  }
      
}

//code for getting answers

function get_flag_answers() {

  for(var x = 1; x < 6; x++) {
    document.getElementById("flag_name_" + x).style.visibility = "visible";
  }
}