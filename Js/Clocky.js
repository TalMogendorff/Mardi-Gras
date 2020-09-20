 var timer = new Date("Feb 16, 2021 00:00:00").getTime();
 var x = setInterval(function () {
     var now = new Date().getTime();
     var between = timer - now;
     //got help from the web with this part :D
     var days = Math.floor(between / (1000 * 60 * 60 * 24));
     var hours = Math.floor((between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((between % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((between % (1000 * 60)) / 1000);


     document.querySelector(".timer").innerHTML = days + "D " + hours + "H " +
         minutes + "M " + seconds + "S ";

     if (between < 0) {
         clearInterval(x);
         document.querySelector(".timer").innerHTML = "LET THE SHOW BEGIN !!";
     }

 }, 1000);