document.getElementById("submit-button").addEventListener("click", function () {
  const emailInput = document.getElementById("field-email");
  const email = emailInput.value.trim();

  // Validação simples de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um e-mail válido!");
    return;
  }

  // Salvar o e-mail no localStorage
  localStorage.setItem("subscribedEmail", email);

  // Redirecionar para a página de sucesso
  window.location.href = "./subscribe-success.html";
});
