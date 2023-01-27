let min=0;
let hr=0;
let sec=0;
let mSec=0;

let timer=false;


function shower(){
    let stringmin=min;
    let stringhr=hr;
    let stringsec= sec;
     let stringmSec=mSec;

    if(stringmin<10){
        stringmin ="0"+stringmin;
    }
    if(stringsec<10){
        stringsec="0"+stringsec;
    }
    if(stringhr<10){
        stringhr= "0"+stringhr;
    }
    if(stringmSec<10){
        stringmSec="0"+stringmSec;
    }

    document.getElementById("mSec").innerHTML=stringmSec;
    document.getElementById("sec").innerHTML=stringsec;
    document.getElementById("min").innerHTML=stringmin;
    document.getElementById("hr").innerHTML=stringhr;


}


function start(){
    timer=true;

    stopwatch();

}

function stop(){
 timer=false;
 stopwatch();

}

function reset(){
 timer=false;
  min=0;
  hr=0;
  sec=0;
  mSec=0;
  shower();
  
}


function stopwatch(){
if(timer==true){

setTimeout(() => {
    stopwatch(); 
}, 10);

 mSec=mSec+1;

if(mSec==100){
    sec=sec+1;
    mSec=0;
} 

if(sec==60){
   min=min+1;
   sec=0;
}
if(min==60){
  hr=1;
  min=0;
}


//  showing on screen
shower();


}


}
