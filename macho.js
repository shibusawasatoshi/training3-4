
const start = document.querySelector('.timer');
const finish = document.querySelector('.finish');
const log=document.querySelector('.log');
const result=document.querySelector('.result');
const bgm0 = document.querySelector('.bgm0');
const bgm1 = document.querySelector('.bgm1');
const bgm2 = document.querySelector('.bgm2');
const bgm3 = document.querySelector('.bgm3');
const bgm4 = document.querySelector('.bgm4');
const bgm5 = document.querySelector('.bgm5');
const bgm6 = document.querySelector('.bgm6');
const bgm7 = document.querySelector('.bgm7');
const bgm8 = document.querySelector('.bgm8');
const bgm9 = document.querySelector('.bgm9');



let count = 0;
let downcount=0;
let repcount=0;
let bgmcount_down=0;
let bgmcount_up=0;
let timer = null;
let setcount=0;

const bgm=new Array(bgm0,bgm1,bgm2,bgm3,bgm4,bgm5,bgm6,bgm7,bgm8,bgm9);

const result_rep=new Array('apple');

function countdown(){
    count=0;
    
    let downid = setTimeout(countdown, 1000);
    console.log(downcount++);
    
    if(downcount > 3){　
       
      clearTimeout(downid);　//idをclearTimeoutで指定している
     
      repcount++;
      console.log(`行なった回数${repcount}`);
      countup();
    }else if(timer==1||timer==2){
        clearTimeout(downid);
    }else{
      
        log.innerHTML=`上げる${downcount}`;
    }
}


function countup(){
    downcount=0;
    
    let id = setTimeout(countup, 1000);
    console.log(count++);
    
    if(count > 4){　
        
      clearTimeout(id);　//idをclearTimeoutで指定している
     
      countdown();
    }else if(timer==1||timer==2){
        clearTimeout(id);
    }else{
     
        log.innerHTML=`下げる${count}`;
    }
}










function voicecount_down(){
    let downbgm = setTimeout(voicecount_down, 1000);
    bgmcount_up=0;
    console.log(bgmcount_down);
    if(bgmcount_down > 3){　
      clearTimeout(downbgm);　//idをclearTimeoutで指定している
      window.setTimeout(voicecount_up(),1000);
    }else if(timer==1||timer==2){
        clearTimeout(downbgm);
}if(timer==0){bgm[bgmcount_down].play();
bgmcount_down=bgmcount_down+1;}
}







function voicecount_up(){
    bgmcount_down=0;
    let upbgm = setTimeout(voicecount_up, 1000);
    
    console.log(bgmcount_up);
    if(bgmcount_up > 2){　
      clearTimeout(upbgm);　//idをclearTimeoutで指定している
      window.setTimeout(voicecount_down(),1000);
    }else if(timer==1||timer==2){
        clearTimeout(upbgm);
}if(timer==0){bgm[bgmcount_up].play();
bgmcount_up=bgmcount_up+1;}
}







 
start.onclick= function(){
    if(timer == null||timer==2){
    timer=0;
    downcount=0;
    count=0;
    countup();
    voicecount_down();
    }
};
   
    

   
finish.onclick= function(){
    if(timer == 0 ){
        timer=2;
    bgmcount_up=0;
    bgmcount_down=0;
    setcount++;
    log.innerHTML=`行なった回数は${repcount}回です。`;
    result_rep.push(`<div> ${setcount}セット目に行なった回数は${repcount}回です。</div>`);
    result.insertAdjacentHTML('beforeend',result_rep[setcount] );
    repcount=0;
 

    }else{
        log.innerHTML=`行なった回数は${repcount}回です。`;
        repcount=0;
    }
};
   
