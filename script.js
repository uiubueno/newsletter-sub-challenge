document
  .querySelector(".newsletter-button-request")
  .addEventListener("click", function () {
    const emailInput = document.getElementById("field-email");
    const email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido!");
      return;
    }

    localStorage.setItem("subscribedEmail", email);

    window.location.href = "./subscribe-success.html";
  });
