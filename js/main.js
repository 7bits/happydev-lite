$(document).ready(function() {

/*if (!document.images)
return*/


var step=0;

var slideit = function() {
    console.log(step);
   
if (step<2)
step++;
else
step=0;
setTimeout(slideit,3000)
}
slideit();
});