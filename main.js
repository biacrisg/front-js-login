function post(url, body) {
  let request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(body));

  request.onload = function (event) {
    if (this.status === 200) {
      setCookie('teste','teste',7);
      console.log('documento', setCookie)
      // window.location.href = "welcome.html"
    } else if (this.status == 404) {
      console.log("Usuário não existe", this.status);
    } else if (this.status == 401) {
      console.log("Senha incorreta", this.status);
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





