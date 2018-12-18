// front end
$(document).ready(function(){

   $(".button-0").click(function(event){
     alert("alright!");
   });
   $(".button-1").click(function(event){
     //alert("hello world!");
     alert(randomNumber());
     });

    $(".button-2").click(function(event){
       alert("check!");
    });
});

// back end

 function randomNumber(){
        var min = 1;
        var max = 6;
        var result = Math.floor(Math.random()*max)+min;
