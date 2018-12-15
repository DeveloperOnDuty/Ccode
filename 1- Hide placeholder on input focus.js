var mydata = document.getElementById('myInput');

mydata.onfocus = function(){
    
    "use strict";
    //store placeholder Attr in Backup
    this.setAttribute('backupAttr', this.getAttribute('placeholder'));
    
    //Epty placeholder Attribute 
    
    this.setAttribute('placeholder','')
    
};

mydata.onblur = function(){
    
    "use strict";
    //get placeholder Attr from Backup
    this.setAttribute('placeholder', this.getAttribute('backupAttr'));
    
    //Empty placeholder Attribute 
    
    this.setAttribute('backup','')
    
};