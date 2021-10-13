function myFunction1() {
  
    var x= document.getElementById("u1").value;
 var y = document.getElementById("p1").value;
 if (x== null ||x== "") {
        alert("Please enter the admin email-id.");
         return false;
               }
   if (y== null ||y== "") {
          alert("Please enter the admin password.");
           return false;
                 }

     if(x!="admin@iiit.ac.in" && y!="admin")
     {
     alert('Login un-successful');

     
     }
     
     if(x=="admin@iiit.ac.in" && y=="admin")
     {
     alert('Login successful');

     location.replace("admin.html");
     }
    }