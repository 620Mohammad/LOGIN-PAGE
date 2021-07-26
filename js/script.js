function login(){
  var uname = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var short = document.getElementById("sarwar").value;

  if( uname == "Mohammad" && pass == "12345" &&  short == "sarwar"){
      location.assign("file:///D:/Javascript%20course/project/Login/login-before.html");
  } else{
    window.alert('wrong');
   }
}