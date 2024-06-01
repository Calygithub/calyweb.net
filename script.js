

let username;
let email;
let phone;
let message;

document.getElementById("mybutton").onclick = function(){

  username = document.getElementById("name").value;
  console.log(username);

  email = document.getElementById("email").value;
  console.log(email);

  phone = document.getElementById("phone").value;
  console.log(phone);

  message = document.getElementById("message").value;
  console.log(message);

  document.getElementById("contact-page").innerHTML = "Message Sent Successfully"

}