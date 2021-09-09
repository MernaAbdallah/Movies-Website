var x = document.getElementById("login");
    var y = document.getElementById("Register");
    var z = document.getElementById("btn");
        
        function Register() {
          x.style.left = "-400px";
          y.style.left = "50px";
          z.style.left = "110px";
        }
         function login() {
          x.style.left = "50px";
          y.style.left = "450px";
          z.style.left = "0px";
        }
                       
        document.getElementById("Registerbtn").addEventListener("click", myFunction);

function myFunction() {
    

    var user_name=document.getElementById('username').value;                   
    var email=document.querySelector('#email');
    var user_pswd=document.querySelector('#password').value; 
        localStorage.setItem("username", user_name);                                     
        localStorage.setItem("email", email.value);                    
        localStorage.setItem("password", user_pswd);  
        console.log(user_pswd);
}

let email="admin@mail.com";
let password="password";
let pass="123456";
function chick (){
  if(document.getElementById("pass-field").value === pass){
    alert("Wrong Password");
  }
 else if( document.getElementById("input-field").value === email && 
document.getElementById("pass-field").value === password)
{
  window.location.href ="admin page/index.html";

}
else{
  window.location.href ="home/index.html"; 
 }
  }
 


  