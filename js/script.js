// front end jQuery
$(document).ready(function(){

   $(".button-0").click(function(event){
     alert("alright!");
   });

   $(".button-1").click(function(){
     //alert("hello world!"); button check
     randomNumber();
     });

    $(".button-2").click(function(){
       // alert("check!");
       
    });

});

// back end javascript
 function randomNumber(){
        var min = 1;
        var max = 6;
        var result = Math.floor(Math.random()*max)+min;

 if (result === 1){
    $('.label4').text(0);
 }
 else{
  // alert();
  $('.label4').text(result);
 }
};
//function that pushes the score result to total
function hold(){
  var final = (parseInt('.label4').text());
  $('.label3').text(final);
}
