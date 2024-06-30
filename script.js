let hrs = document.getElementById("hrs")
let mins = document.getElementById("mins")
let sec = document.getElementById("sec")



setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() <10? "0":"")  + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10? "0": "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10? "0": "") + currentTime.getSeconds();

},1000);





/* Stopwatch starts */
let [seconds,minutes,hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++
        if(minutes == 60){
            minutes = 0;
            hours++
        }
    }
    let h = hours<10? "0"+ hours:hours;
    let m = minutes<10? "0"+minutes:minutes;
    let s = seconds<10? "0" + seconds:seconds;
    displayTime.innerHTML = h+ ":"  +m +":" + s;
}

function watchStart(){
    if(timer !=null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00";

}



/* Stopwatch ended */





/* Dropped down menubar */
let droppedDown = document.getElementById("dropped-down");
let projects  = document.getElementById("projects");
let main = document.getElementById("main");

const display = ()=>{
    droppedDown.classList.toggle("show-dropped-down");
}
const remove = ()=>{
    droppedDown.classList.remove("show-dropped-down")
}


/* Dark mood started */

let body = document.getElementById("body");

const swapMode = ()=>{
    body.classList.toggle("body")
}





/* Dark mood ended */






/* Side-bar-icon: */
let sidebariconright = document.getElementById("side-bar-icon-right");
let sideBarIconleft = document.getElementById("side-bar-icon-left");
let menuItems = document.getElementById("menu-items");
const showBar = ()=>{
    menuItems.classList.toggle("showBar");
    if(menuItems.classList.contains("showBar")){
        sidebariconright.style.display = "block";
    }
    else{
        sidebariconright.style.display = "none";
    }
    
    
    
}


const delet = ()=>{
    menuItems.classList.remove("showBar");
}

