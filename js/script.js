$(document).ready(function(){
  $("button#roll").click(function(){
    });
});
// var i= 1;
// for(i=1; i<=6; i++);
function randomNumber(){
       var min = 1;
       var max = 6;
       var result = Math.floor(Math.random()*max)+min;
      //alert (result);  // function that tests random number
if (result > 1){
alert("continue")
}
else{
alert("stop!")
}
};
