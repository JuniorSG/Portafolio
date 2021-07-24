//Variables
var docbody = document.getElementById("body");
var divclass = document.getElementsByClassName("divclass");

var translateNum = 0;


var Footerer = document.getElementById("footer");
var FooterMaxRange = false;

var VisorImg = false;
var lightBox = document.getElementsByClassName("light-box")

// --------------------------------------------------
////////////////////TESTING ZONE/////////////////////





// ---------------------------------------------------
// Light-Box Scroll
window.addEventListener("hashchange", (e)=>{
    for (let i = 0; i < lightBox.length; i++) {
        lightBox[i].scrollTop = 0; 
    }
})

//Blockeo del scroll
function VisorTrue(){
    VisorImg = true;
}
function VisorFalse(){
    VisorImg = false;
}

// Salir del visor
window.addEventListener("keyup",(e)=>{
    if (e.key =="Escape") {
        location.hash = "#";
        VisorImg = false;
    }
})

//RESIZEas
window.addEventListener("resize", redimensionar); 
function redimensionar(){
    camera.aspect= window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
}

window.addEventListener("click", (e)=>{
    if (e.target.className=="light-box") {
        location.hash = "#";
        VisorImg = false;
    }
    if (VisorImg==false && e.target.hash == "#home") {
        translateNum=0;
        for (let i = 0; i < divclass.length; i++) {
            divclass[i].style.transform="translateY("+translateNum+"px)";
        }
    }else if (VisorImg==false && e.target.hash == "#about") {
        translateNum=-750;
        for (let i = 0; i < divclass.length; i++) {
            divclass[i].style.transform="translateY("+translateNum+"px)";
        }
    }else if (VisorImg==false && e.target.hash == "#proyects") {
        translateNum=-2300;
        for (let i = 0; i < divclass.length; i++) {
            divclass[i].style.transform="translateY("+translateNum+"px)";
        }
    } else if (VisorImg==false && e.target.hash == "#contact") {
        translateNum=-2450;
        // Footer
        Footerer.style.top="80%";
        FooterMaxRange = true;
        // 
        for (let i = 0; i < divclass.length; i++) {
            divclass[i].style.transform="translateY("+translateNum+"px)";
        }   
    }
})

Footerer.addEventListener("mouseover", (e)=>{
    if (FooterMaxRange == false) {
        Footerer.style.top="80%";
    }
})
Footerer.addEventListener("mouseout", (e)=>{
    if (FooterMaxRange == false) {
        Footerer.style.top="99%";
    }
})

//Scrolleo
docbody.addEventListener("wheel",(e)=>{
    //DOWN
    if(e.deltaY==100 && translateNum<0 && VisorImg == false){
        translateNum+=50;
        // Footer
        Footerer.style.top="99%";
        FooterMaxRange = false;
        for (let i = 0; i < divclass.length; i++) {
            divclass[i].style.transform="translateY("+translateNum+"px)";
        }
    }
    //UP
    else if (e.deltaY==-100 && translateNum>-2450 && VisorImg == false){
        translateNum-=50;
        for (let i = 0; i < divclass.length; i++) {
            divclass[i].style.transform="translateY("+translateNum+"px)";
        }
    }else if (e.deltaY==-100 && translateNum<=-2450 && VisorImg == false) {
        // Footer
        Footerer.style.top="80%";
        FooterMaxRange = true;
        //
    }
})
