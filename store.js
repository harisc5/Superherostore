function buy(){
alert("you have bought your shoes :)");

}
function login(){
var username = document.getElementById("mail").value;
var password = document.getElementById("pw").value;
if (username== 'admin'&& password == 'admin'){
alert("you have successfully logged in");
}
else{
alert("Incorrect! Please try again");
}
}
