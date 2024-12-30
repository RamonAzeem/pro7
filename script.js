function validation(){
   var name = document.getElementById("name").value;
   var lastname = document.getElementById("lastname").value;
   var email = document.getElementById("email").value;
  
   var message = document.getElementById("message").value;
  
   var error_message = document.getElementById("error_message");

   error_message.style.padding = "10px";
   if(name.length < 3){
    text = "Please enter  name!";
    error_message.innerHTML = text;
    return false;
   }
   if(lastname.length < 3){
    text = "Please enter last name!";
    error_message.innerHTML = text;
    return false;
   }
   if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please enter valid email!";
    error_message.innerHTML = text;
    return false;
   }
   if(message.length < 140){
    text = "Please enter more than 140 characters!";
    error_message.innerHTML = text;
    return false;
   }
  alert("form submitted succesfully");
   return true;
}