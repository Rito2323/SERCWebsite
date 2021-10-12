const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function myFunction1() {
  
     var x= document.getElementById("u1").value;
  var y = document.getElementById("p1").value;
  if (x== null ||x== "") {
         alert("Please enter the username.");
          return false;
                }
    if (y== null ||y== "") {
           alert("Please enter the password.");
            return false;
                  }

      if(x!="admin@" && y!="admin")
      {
      alert('Login un-successful');

      
      }
      
      if(x=="admin@" && y=="admin")
      {
      alert('Login successful');

      location.replace("admin.html");
      }
       
      

 

  }