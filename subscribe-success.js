// Recupera o e-mail do localStorage e exibe no elemento com a classe "email-test"
const email = localStorage.getItem("subscribedEmail");
if (email) {
  const emailElement = document.querySelector(".email-test");
  if (emailElement) {
    emailElement.textContent = email;
  }
}

const dismissButton = document.querySelector(".container-dismiss-button");
if (dismissButton) {
  dismissButton.addEventListener("click", function () {
    window.location.href = "./index.html";
  });
}
