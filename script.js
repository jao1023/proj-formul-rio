document.getElementById("contactForm").addEventListener(submit, function(event))

      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const errorMessage = document.getElementById("error-message");

      errorMessage.textContet = "";

      if (name === "" || email === "" || message === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos";
        return;
      }


      if (validateEmail(email)) {
        errorMessage.textContent = "Por favor,insira um e-mail válido";
        return;
      }

      alert("Formulário enviador com sucesso!");
    });

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\\s@]+$/;
      return re.test(email);
    }