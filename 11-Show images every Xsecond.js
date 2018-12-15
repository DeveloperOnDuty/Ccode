var myElement = document.getElementById('myImg'),
    
     myImgs = [
        
        "https://cdn.pornpics.com/pics1/2017-11-01/469377_02big.jpg",
        "https://cdn.pornpics.com/pics1/2017-11-01/469377_04big.jpg",        "https://cdn.pornpics.com/pics1/2017-11-01/469377_07big.jpg",
         "https://cdn.pornpics.com/pics1/2017-11-01/469377_12big.jpg",
         "https://cdn.pornpics.com/pics1/2017-11-01/469377_10big.jpg",
         "https://cdn.pornpics.com/pics1/2017-11-01/469377_09big.jpg"
         ];

function changeImage(myElement, myImgs){
    'use strict';

    setInterval(function(){
               var  myRandomNumb = Math.floor(Math.random()* myImgs.length);


        myElement.src = myImgs[myRandomNumb];
        
    }, 2000 );
    
}
changeImage(myElement,myImgs);