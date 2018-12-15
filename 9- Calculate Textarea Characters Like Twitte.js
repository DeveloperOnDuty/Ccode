var textArea = document.getElementById('my-text'),
    span = document.getElementById('my-span');

textArea.onkeyup = function(){
    'use strict';
    span.textContent = 50 -  this.value.length;
    
    
if(span.textContent < 0){
    
    span.style.color = 'red' ;
    
}else{
    
    span.style.color = '#000';
}
    
    
};