var myButton = document.getElementById('Button');


window.onscroll = function(){
    ' use strict';
    
    if(window.pageYOffset>= 3000){
        
        myButton.style.display= "block";
    }else{
        
                myButton.style.display= "none";

    }
    
    
    
};
myButton.onclick = function(){
    'use strict';
    window.scrollTo(0,0);
    
};