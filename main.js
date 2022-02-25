
function createCookie(nome, valor, expira){
  var dtExpira = "expires=" +expira;
  document.cookie = nome + "=" + valor + "; " + dtExpira
}

function post(url, body) {
  let request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(body));

  request.onload = function (event) {
    if (this.status === 200) {
      createCookie("cname", "value", " Tue, 01 Jan 2030 12:00:00 UTC ");
      window.location.href = "welcome.html";
    } else if (this.status == 404) {
      alert("Dados incorretos, por favor tente novamente")
    } else if (this.status == 401) {
      alert("Dados incorretos, por favor tente novamente")
    } else {
      console.log("Somthing wrong happen:", this.status);
    }
  };

  return request.responseText.XMLHttpRequest;
}

function login() {
  event.preventDefault();
  const url = "http://localhost:3000/login";
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  console.log("user", user);
  console.log("password", password);

  body = {
    user: user,
    password: password,
  };

  post(url, body);
}


function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}





