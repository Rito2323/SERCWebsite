var show = document.getElementById('navlinks')

function showMenu() {
    show.style.right = "0";

}

function closeMenu() {
    show.style.right = "-50%";
}

function myFunction1() {

        var x = document.getElementById("fname").innerText;
        document.getElementById("pp").innerHTML =x;

  }