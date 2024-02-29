// code for timer
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo3").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo4").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo5").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo6").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo7").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo8").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo9").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo10").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo11").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo12").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




// code for fullscreen search bar
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}