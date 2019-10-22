const loginPage = document.querySelector("#left-login-inner");
const signupPage = document.querySelector("#left-signup-inner");
const leftContent = document.querySelector(".left-content");

loginPage.remove();

document.getElementById("login-account").addEventListener("click", function() {
  signupPage.remove();
  leftContent.appendChild(loginPage);
});

leftContent.addEventListener("click", function(e) {
  if (e.target.id === "create-account") {
    loginPage.remove();
    leftContent.appendChild(signupPage);
  }
});
