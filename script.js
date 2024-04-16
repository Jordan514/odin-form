document.querySelector("#middle").addEventListener("keyup", () => {
  let password = document.querySelector("#password");
  let confirm = document.querySelector("#confirm");
  if (confirm.value !== password.value) {
    password.setAttribute("class", "invalid");
    confirm.setAttribute("class", "invalid");
  } else {
    password.removeAttribute("class", "invalid");
    confirm.removeAttribute("class", "invalid");
  }
});
