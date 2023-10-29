export default function login() {
  // login close
  const loginForm = document.querySelector("#login-form");
  const loginClose = document.querySelector("#login-close");
  const loginBtn = document.querySelector("#login-button");

  loginClose.addEventListener("click", function () {
    loginForm.classList.add("scale-0");
  });

  loginBtn.addEventListener("click", function () {
    loginForm.classList.remove("scale-0");
  });

  document.addEventListener("click", function (e) {
    if (!loginForm.contains(e.target) && !loginBtn.contains(e.target)) {
      loginForm.classList.add("scale-0");
    }
  });
}
