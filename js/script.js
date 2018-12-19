// front end jQuery
$(document).ready(function(){
   //newgame button
   $(".button-0").click(function(event){
     //alert("alright!");
     reset();
   });
   //roll player1 buuton
   $(".button-1").click(function(){
     //alert("hello world!"); button check
     randomNumber();
     });
    // roll plaayer2 button
   $(".button-3").click(function(){
       //alert("hello world!"); button check
       randomNumber1();
       });
    //hold player1 button
    $(".button-2").click(function(){
       // alert("check!");
       hold();
       $('.label6').text(0);
      $(".button-2").hide();
      $(".button-1").hide();
      $(".button-3").show();
      $(".button-4").show();

    });
     //hold plaer2 button
    $(".button-4").click(function(){
       // alert("check!");
       hold1();
       $('.label5').text(0);
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
    $(".button-1").hide();
    $(".button-2").hide();
    $(".button-3").show();
    $(".button-4").show();


 }
 else{
  // alert();
  $('.label4').text(result);
 addP1();
 }
};
function addP1(){
var num1 = parseInt($('.label4').text());
var num2 = parseInt($('.label6').text());
var resX = num1+num2;
  $('.label6').text(resX);
};

//function that pushes the score result to total
function hold(){
var final4 = $('.label6').text();
var final3 = $('.label3').text();
var res = add(final4,final3);
  //alert(res);
  $('.label3').text(res);
  //$('.label6').text('yey');

  if (res >=10){
    $('.label3').text("you won");
    $(".t1").hide();
    $(".s1").hide();
    $(".label4").hide()
    $('.box1').hide();
    $('.button-1').hide();
    $('.button-2').hide();
    $('.button-3').hide();
    $('.button-4').hide();
    $('.gif').show();
    $('.audio').play();

  }else {
    $('.label3').text(res);
    $('.label4').text(0);
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
  $('.button-1').show();
  $('.button-2').show();
  $('.button-3').hide();
  $('.button-4').hide();
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
 addP2();
}
};

function addP2(){
var num1 = parseInt($('.label2').text());
var num2 = parseInt($('.label5').text());
var resX = num1+num2;
  $('.label5').text(resX);
};


//function that pushes the score result to total for player2
function hold1(){
var final4 = $('.label5').text();
var final3 = $('.label1').text();
// var final2 = $('.label5').text();

var res = add(final4,final3);
// var ress = add(fina2,final4);
 //alert(res);
 $('.label1').text(res);
 // $('.label5').text(ress);

 if (res >=10){
   $('.label1').text("you won");
   $(".s").hide();
   $(".t").hide();
   $(".label2").hide();
   $('.box2').hide();
   $('.button-1').hide();
   $('.button-2').hide();
   $('.button-3').hide();
   $('.button-4').hide();
   $('.gif').show();
   $('.audio').play();
 }else {
   $('.label1').text(res);
   $('.label2').text(0);

 }
};
function add(fNum, sNum){
 var addition = parseInt(fNum) + parseInt(sNum);
 return addition;
};
