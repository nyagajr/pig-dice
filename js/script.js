// front end jQuery
$(document).ready(function(){

   $(".button-0").click(function(event){
     //alert("alright!");
     reset();
   });

   $(".button-1").click(function(){
     //alert("hello world!"); button check
     randomNumber();
     });

   $(".button-3").click(function(){
       //alert("hello world!"); button check
       randomNumber1();
       });

    $(".button-2").click(function(){
       // alert("check!");
       hold();
      $(".button-2").hide();
      $(".button-1").hide();
      $(".button-3").show();
      $(".button-4").show();

    });

    $(".button-4").click(function(){
       // alert("check!");
       hold1();
       $(".button-3").hide();
       $(".button-4").hide();
       $(".button-1").show();
       $(".button-2").show();
    });

});

// back end javascript player 1
 function randomNumber(){
        var min = 1;
        var max = 6;
        var result = Math.floor(Math.random()*max)+min;

 if (result === 1){
    $('.label4').text("player two's turn");

 }
 else{
  // alert();
  $('.label4').text(result);
 }
};
//function that pushes the score result to total
function hold(){
var final4 = $('.label4').text();
var final3 = $('.label3').text();
var res = add(final4,final3);
  //alert(res);
  $('.label3').text(res);

  if (res >=10){
    $('.label3').text("you won");
    $(".t").hide();
    $(".label4").hide()
  }else {
    $('.label3').text(res);
  }
};
//add function
  function add(fNum, sNum){
   var addition = parseInt(fNum) + parseInt(sNum);
   return addition;
 };

//function reset
function reset(){
  $(".label3").text(0);
  $(".label4").text(0);
  $(".label1").text(0);
  $(".label2").text(0);
};

//player 2
function randomNumber1(){
       var min = 1;
       var max = 6;
       var result = Math.floor(Math.random()*max)+min;

if (result === 1){
   $('.label4').text("player one turn");
   $('.button-1').hide();
   $('.button-2').hide();
   $('.button-3').show();
   $('.button-4').show();
   $('.label4').reset();

}
else{
 // alert();
 $('.label2').text(result);
}
};



function randomNumber1(){
       var min = 1;
       var max = 6;
       var result = Math.floor(Math.random()*max)+min;

if (result === 1){
   $('.label2').text("player one turn");
   $('.button-4').hide();
   $('.button-3').hide();
   $('.button-2').show();
   $('.button-1').show();

}
else{
 // alert();
 $('.label2').text(result);
}
};
//function that pushes the score result to total
function hold1(){
var final4 = $('.label2').text();
var final3 = $('.label1').text();
var res = add(final4,final3);
 //alert(res);
 $('.label1').text(res);

 if (res >=10){
   $('.label1').text("you won");
   $(".s").hide();
   $(".label2").hide()
 }else {
   $('.label1').text(res);
 }
};
function add(fNum, sNum){
 var addition = parseInt(fNum) + parseInt(sNum);
 return addition;
};
