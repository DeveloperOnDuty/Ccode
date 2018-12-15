var myButton = document.getElementById('button'),
    myInput = document.getElementById('input');

myButton.onclick = function(){
    'use strict';
    
  if (this.textContent === 'Show Password'){
      
      myInput.setAttribute("type", 'text');
      
      
      this.textContent = 'Hide Password';
      
  }  else{
      
       myInput.setAttribute("type", 'password');
      
      
      this.textContent = 'Show Password';
  }
    
    
};