function light(value){
    var pic;
         if(value == 0){
           pic ="images/lightoff.png";
    }
       else{
        pic = "images/lightonn.png";
    }
      document.getElementById('bulb').src=pic; 
    }
      
