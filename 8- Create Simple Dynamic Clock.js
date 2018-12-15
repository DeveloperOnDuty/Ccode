

function showTime(){
    'use strict';
    
    var now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();

    
     if(hours < 10){
       hours = "0" + hours;
   };
    if(minutes< 10){
       minutes = "0" + minutes;
   };
    if(seconds < 10){
       seconds = "0" + seconds;
   };  
    
document.getElementById('Clock').textContent = hours + ":" + minutes + ':'+ seconds ;
  
};

window.onload = function(){
    ' use strict';
    setInterval(showTime , 500);
    
};










//HTML/css code

/*<!DOCTYPE html>
<html lang= "en">

<head>
    <meta charset = "UTF-8">
    <title>Learn Js </title>
    <link rel="stylesheet" href="style.css">
    <style>
        div{
            color: blue;
            font-size: 100px;
            text-align: center;
            padding: 55px;
            font-weight: bold
        }
        h2{
            
            color: rebeccapurple;
            font-size: 50px;
            text-align: center;
            padding: 10px;
            text-decoration:inherit
        }
    
    </style>
    </head>
<body>
 <h2> < Timer >  </h2>
    <div id="Clock"></div>
    
    <script src="Random.js"></script>
    
    </body>



</html>

*/












