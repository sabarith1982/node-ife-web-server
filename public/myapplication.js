function jsHandleSubmitClick(){
  var usertext = document.getElementById("usertxt").value ? document.getElementById("usertxt").value : "1";
  var passtext = document.getElementById("passtxt").value ? document.getElementById("passtxt").value : "1";
  if(usertext === "testuser" && passtext === "testuser"){
    location.href="http://localhost:3000/dashboard";
  }else{
    document.getElementById("usertxt").value = "";
    document.getElementById("passtxt").value = "";
  }
}
