var countDiv = document.getElementById('xyz'),
    seconds = 112 ,
    secondPass,
    countDown = setInterval(function(){
        'use strict';
        
        secondPass()
    }, 1000);
function secondPass(){
    'use strict';
  var minutes = Math.floor(seconds/60),
      remsecond = seconds % 60;
    if (seconds < 10 ){
        remsecond = remsecond + "0";
    };
    
    countDiv.innerHTML = minutes + ":" + remsecond;
    
    if(seconds > 0){
        
        seconds = seconds - 1
        
    }
    
    else{
        clearInterval(countDown);
        
    }
    
    
};
    