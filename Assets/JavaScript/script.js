/* 
   Giovani's italian Eats
   Filename: script.js

   Author:   Matthew Brinkmann
   Date:     4/27/2021
 */



function refreshPage(){
window.location.reload();
} 

 


var fname;
var lname;
var email;
var phone;
var order;
function getvalue(){
	fname = document.getElementById("fnameinput").value;
	lname = document.getElementById("lnameinput").value;
	order = document.querySelector('input[type="checkbox"]:checked').value;
	alert("Hello " + fname + ". Your order of " + order + " has been sent."	);
}


function sendinfo(){
	fname = document.getElementById("fnameinput").value;
	lname = document.getElementById("lnameinput").value;
	email = document.getElementById("emailinput").value;
	phone = document.getElementById("phoneinput").value;
	alert("First name: " + fname+"\n" + "Last name: " + lname +"\n"+ "Email: " + email +"\n"+ "Phone Number: " + phone);
}
