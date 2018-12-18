// front end jQuery
$(document).ready(function(){

   $(".button-0").click(function(event){
     alert("alright!");
   });

   $(".button-1").click(function(){
     //alert("hello world!");
     randomNumber1();

     });

    $(".button-2").click(function(){
       alert("check!");
    });

});

// back end javascript
 function randomNumber1(){
        var min = 1;
        var max = 6;
        var result = Math.floor(Math.random()*max)+min;
        //return result;

 if (result === 1){
   alert("Its player 2's turn");
   $('.box1').show();
   $('.box2').hide();
randomNumber2();
 }else{
   alert(result);
 }
};

function randomNumber2(){
       var min = 1;
       var max = 6;
       var result = Math.floor(Math.random()*max)+min;
       //return result;

if (result === 1){
  alert("Its player 1's turn");
  $('.box1').hide();
  $('.box2').show();

}
randomNumber2();
else{
  alert(result);
}};
