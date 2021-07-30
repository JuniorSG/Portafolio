var div2_1 = document.getElementById("Div2-1")
var div2 = document.getElementById("Div2")
var BioT = document.getElementById("BioT")
var bodypage = document.getElementById("body")

window.onload = ()=>{
    var loading = document.getElementById("contenedorCarga");
    loading.style.opacity = "0";
    loading.style.visibility="hidden";
}


function CerrarDiv2_1(){
    div2_1.className = "Div2-1-inactive";
    div2.style.background = "rgba(0, 0, 0, 0.521)";
    BioT.style.opacity=1;
}

function AbrirDiv2_1(){
    div2_1.className = "Div2-1-active";
    div2.style.background = "rgba(0, 0, 0, 0)";
    BioT.style.opacity=0;
}
