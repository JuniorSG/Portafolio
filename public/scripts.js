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

//RESIZE
window.addEventListener("resize", redimensionar); 
function redimensionar(){
    console.log(window.innerWidth);
    console.log(window.innerHeight);
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
    }else if (VisorImg==false && e.target.hash == "#news") {
        translateNum=-2500;
        for (let i = 0; i < divclass.length; i++) {
            divclass[i].style.transform="translateY("+translateNum+"px)";
        }
    } else if (VisorImg==false && e.target.hash == "#contact") {
        translateNum=-2700;
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
    console.log(translateNum)
    if(e.deltaY==100 && translateNum<0 && VisorImg == false){
        console.log(translateNum);
        translateNum+=50;
        // Footer
        Footerer.style.top="99%";
        FooterMaxRange = false;
        //
        for (let i = 0; i < divclass.length; i++) {
            divclass[i].style.transform="translateY("+translateNum+"px)";
        }
    }
    //UP
    else if (e.deltaY==-100 && translateNum>-2700 && VisorImg == false){
        console.log(translateNum);
        translateNum-=50;
        for (let i = 0; i < divclass.length; i++) {
            divclass[i].style.transform="translateY("+translateNum+"px)";
        }
    }else if (e.deltaY==-100 && translateNum<=-2700 && VisorImg == false) {
        console.log("llego a -2800");
        // Footer
        Footerer.style.top="80%";
        FooterMaxRange = true;
        //
    }
})
