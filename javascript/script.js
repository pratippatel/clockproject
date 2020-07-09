var lunch = 1;
var nap= lunch+2;
var eve = 5;
var partytime;
var wakeuptime= 7;
var noon = 12;

var showCurrentTime= function(){
    
    var time=document.getElementById("clock")
    //alert(time);
    var clk=new Date();
    
    var hrs=clk.getHours();
    var min=clk.getMinutes();
    var sec=clk.getSeconds();
    var meridian="AM";
    
    if(hrs>=12){
        meridian="PM"
    }
    if(hrs>12){
        hrs=hrs-12;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }
    
    var clocktime= hrs +":"+ min + ":"+ sec+"  "+meridian;
    
    time.innerText=clocktime;
}
var updatetime =function(){
    
   var hour=new Date().getHours;
    var image=document.getElementById("imgs");
    var msg;
    
    var timeevt = document.getElementById("timeeventjs");
    
    if(hour < noon)
        {
            image="https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
            msg="THIS IS NOON";
        }
    else if(hour == lunch)
        {
            image="";
            msg="THIS IS Lunchtime";
        }
    else if(hour == nap)
        {
            image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
            msg="THIS IS Nap";
        }
    else if(hour == wakeuptime)
        {
            image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
            msg="THIS IS wakeuptime";
        }
    else if(hour >= eve)
        {
            image="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
            msg="THIS IS evening";
        } 
    var par = document.getElementById("btn");
    
    var partyevent =function(){
        
        image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        msg="THIS IS PARTY TIME";
    
    };
    par.addEventListener("click",partyevent);
    partyevent();
    
    console.log(msg);
   timeevt.innerText= msg;
   imgs.src= image;
   showCurrentTime();
};
updatetime();
var inc = 1000;
setInterval(updatetime,inc);
