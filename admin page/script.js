if(localStorage.getItem("body")==null){
    document.querySelector("body").style.backgroundImage;
}
else{
changeColor(localStorage.getItem("body"));}
function changeColor(colorl){
        
    document.querySelector("body").style.backgroundColor=colorl;
 }



document.getElementById("green").addEventListener("click", clickGreen);
function clickGreen(){
    document.querySelector("body").style.backgroundImage=("none");
    changeColor('#4CAF50');  
        localStorage.setItem("body", "#4CAF50");                                                                          

}
document.getElementById("blue").addEventListener("click",clickBlue );
function clickBlue(){
    document.querySelector("body").style.backgroundImage=("none");
    changeColor('#008CBA');                                 
    localStorage.setItem("body", "#008CBA");                                     
        
}

document.getElementById("red").addEventListener("click", clickRed);
function clickRed(){
    document.querySelector("body").style.backgroundImage=("none");
    changeColor('#f44336');                  
        localStorage.setItem("body", "#f44336");                                     
        
}
document.getElementById("gray").addEventListener("click", clickGray);
function clickGray(){
    document.querySelector("body").style.backgroundImage=("none");
    changeColor('gray');                
        localStorage.setItem("body", "gray");                                     
        
}
// font
if(localStorage.getItem("font")==null){
    document.querySelector("body").style.color='black';
}
else{
changeCFont(localStorage.getItem("font"));}
function changeCFont(color){
        
    document.querySelector("body").style.color=color;
 }



document.getElementById("btn1").addEventListener("click", clickgreen);
function clickgreen(){
    document.querySelector("body").style.color=("none");
    changeCFont('#4CAF50');  
        localStorage.setItem("font", "#4CAF50");                                                                          

}
document.getElementById("btn2").addEventListener("click",clickblue );
function clickblue(){
    document.querySelector("body").style.color=("none");
    changeCFont('#008CBA');                                 
    localStorage.setItem("font", "#008CBA");                                     
        
}

document.getElementById("btn3").addEventListener("click", clickred);
function clickred(){
    document.querySelector("body").style.color=("none");
    changeCFont('#f44336');                  
        localStorage.setItem("font", "#f44336");                                     
        
}
document.getElementById("btn4").addEventListener("click", clickgray);
function clickgray(){
    document.querySelector("body").style.color=("none");
    changeCFont('gray');                
        localStorage.setItem("font", "gray");                                     
        
}

