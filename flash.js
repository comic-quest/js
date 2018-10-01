
//

//https://www.dropbox.com/s/qm6mynnfsqk5aer/flash.mp4?raw=1

//https://www.dropbox.com/s/mspqrx6jcmusjp1/startagain.png?raw=1

//https://www.dropbox.com/s/lj893xpb112zfzv/style.css?raw=1

//https://www.dropbox.com/s/2vw7fq6ckrcw5la/script.js?raw=1

//https://www.dropbox.com/s/bec6v06csrxvygr/index.html?raw=1

//<iframe src="comic-quest.github.io/flash" allowtransparency="true" allow="autoplay" width=640 height=480 frameBorder="0">

//https://raw.githack.com/comic-quest/flash/gh-pages/script.js

//https://cdn.rawgit.com/comic-quest/js/d6ea596f/flash.js

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

window.cancelAnimationFrame = window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
        window.msCancelAnimationFrame;



var reqanim;

   var video = document.getElementById("flash");

var canvas = document.getElementById("canvas");
    
    canvas.width=640;
    canvas.height=480;

var ctx = canvas.getContext("2d");

var loadingtext = "Cargando";

var loadingsecond;

var loadingsecondtime;

var isloaded=false;

var showLoading=true;

var showStart=false;

ctx.font='50px Arial';

ctx.fillStyle="white";

var startagain = new Image();
    
    startagain.src = "https://www.dropbox.com/s/mspqrx6jcmusjp1/startagain.png?raw=1"

function loadimg(){

    if(!isloaded){
        sword2.degrees = ((new Date().getHours()%12)*30+new Date().getMinutes()*0.5)-90
       sword1.degrees = Math.floor(map(new Date().getUTCSeconds(),0,60,0,360))

       reqanim = requestAnimationFrame(main);
       
       }
           
}

video.addEventListener("canplaythrough",function(){
    
     setTimeout(function(){
     showLoading=false;
     showStart=true;
     if(window.tween1){
         
         
         //tween1.kill();
         
     }
    
    
    if(!video.paused){
       
       return
        
       }
    
  
      
      
       
       canvas.onclick= function(){
           canvas.onclick=function(){};
           showStart=false;
           isloaded=true;
          
           cancelAnimationFrame(reqanim)
           
           ctx.clearRect(0,0,canvas.width,canvas.height)
           
           video.play();
           
           video.onended=function(){
               
               
               
               
               ctx.drawImage(startagain,canvas.width-40,canvas.height-35)
               
               
               canvas.onclick=function(){
                   canvas.onclick=function(){}
                   video.play();
                   
                
               
               ctx.clearRect(0,0,canvas.width,canvas.height)
               
                   
                   
               }
               
           }
           
           
       }
       
       
       
      


     },3000)

    
     
     
     
     
     
  
     

});

video.src = "https://github.com/comic-quest/flash/blob/gh-pages/flash.mp4?raw=true";


var sword1 = {degrees:0}



sword1.img = new Image();
    
sword1.img.onload = loadimg;

    sword1.img.src = "https://www.dropbox.com/s/15iek960twu7c5z/sword1.png?raw=1";




var sword2 = {degrees:0}




    
    
    var imgsloaded = 0;



function main(){

reqanim = requestAnimationFrame(main);
    
  var date = new Date()
  
  
  var newloadingsecond = Math.floor(date.getTime()/1000);
  
  
  

  
  if(loadingsecond===newloadingsecond){
     
     
      
     }else{
         
         
         
         loadingsecond=newloadingsecond;
         
         var newDegree;
         
         if((sword1.degrees)>=360){
            
             sword1.degrees=sword1.degrees-360
            newDegree= Math.floor(map(date.getUTCSeconds(),0,60,0,360))
            
            }else{
                
                
            newDegree = Math.floor(map(date.getUTCSeconds(),0,60,0,360))
         
        
         
         if(newDegree<sword1.degrees){
            
             newDegree+=360
            
            }
                
            }
         
         
         

         
        var tween1 = TweenMax.to(sword1, 0.5, { degrees: newDegree,onUpdate:function(){
         
            
            
             
           /*
            
            ctx.save();
            ctx.scale(0.5,0.5);
            
            ctx.translate(7,62)
            
            ctx.rotate(0*Math.PI/180);
            
            ctx.translate(0,23) 
ctx.drawImage(sword1.img,100,90);

             
            
            ctx.restore();
            
            ctx.save()
            
            context.save(); 
 */
// move the origin to 50, 35  
            if(!isloaded){
                 ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.save()
                
                
            
                ctx.translate(300,180);
            
ctx.translate(7, 62); 
 
 
// rotate around this point
ctx.rotate(sword2.degrees*Math.PI/180); 
 
// then draw the image back and up
ctx.drawImage(sword1.img, -7, -62); 
 
// and restore the co-ordinate system to its default
// top left origin with no rotation
ctx.restore();
                
               
               
               
           
            ctx.save()
                
 ctx.translate(300,180);
            
ctx.translate(7, 62); 
 
 
// rotate around this point
ctx.rotate((sword1.degrees*Math.PI/180)-90); 
 
// then draw the image back and up
                
           
                
ctx.drawImage(sword1.img, -7, -62);
            
 
// and restore the co-ordinate system to its default
// top left origin with no rotation
ctx.restore();
                
                if(showLoading){
                    ctx.font="50px Arial"
                ctx.fillText("Cargando.",200,70);
                   }
                
                if(showStart){
                   
                    ctx.font="50px Arial"
                ctx.fillText("Haz click para comenzar.",30,420);
                   
                   }
               
                
                
                
            }else{
                
                tween1.pause();
                tween1.kill();
            }
            
            
            
        },onComplete:function(){
          
            
            if(tween1){
                
                tween1.kill();
               
               }
            
           
            
        }})
        
        tween1.play();
         
         
         
     }
    
    
    
    
    
}




/*
var isloading = function(){
    
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    var loadingdots= loadingtext.substring("cargando".length);
    
    if(loadingdots.length<3){
       
        loadingtext+="."
       
       }else{
           loadingtext="Cargando";
           
           
           
       }
    
    ctx.fillText(loadingtext,100,canvas.height/4,canvas.height/2,10000);
    
    
    
}

isloading();
var loading = setInterval(isloading,500)
*/



window.onload = function(){
    

}




    
                       
                       



                       
                       

function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



