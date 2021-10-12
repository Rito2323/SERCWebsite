var show = document.getElementById('navlinks')

function showMenu() {
    show.style.right = "0";

}

function closeMenu() {
    show.style.right = "-50%";
}
function myFunction1(a) {

    if(a==0) {
        document.getElementById("area_0").hidden=false;
    document.getElementById("area_1").hidden=true;
    document.getElementById("area_2").hidden=true;
    document.getElementById("area_3").hidden=true;
  
    }
    if(a==1) {
        document.getElementById("area_0").hidden=true;
    document.getElementById("area_2").hidden=false;
    document.getElementById("area_2").hidden=true;
    document.getElementById("area_3").hidden=true;
  
    }
}