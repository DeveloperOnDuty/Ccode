
document.getElementById('title').onkeyup = function(){
    "use strict";
document.getElementById('text-live').textContent = this.value;
    
};

document.getElementById('content').onkeyup = function(){
    'use strict';
    document.getElementById('content-live').textContent = this.value;
};