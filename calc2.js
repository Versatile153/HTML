let display=document.getElementById("display");
let buttons=Array.from(document.getElementsByClassName('button'));

buttons.map(button=>{
button.addEventListener("click", (e)=>{
   switch(e.target.innerText){
       case 'C':
       display.innerText=''
       break;
       case 'DEL':
           display.innerText=display.innerText.slice(0, -1);
           break;
           case '=':
               try{
                display.innerText=eval(display.innerText);
               }catch{
                   display.innerText='invalid operaton'
               }
               break;
        
       default:
           display.innerText +=e.target.innerText
   }
});
});

buttons.map(function(button){
    
})