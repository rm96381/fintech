// Início Script.js
console.log("Início Script.js");

// Método validarLogin
function validarLogin() {

    //Início validarLogin
    console.log("Início validarLogin");

    var senha_correta = false;

    // Criar variáveis para objetos de tela
    var form = document.getElementById("form");
    var alerta = document.getElementById("alerta");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var rememberme = document.getElementById("rememberme");

    // Objeto para dados do formulário
    const data = new FormData(form);

    for (const pair of data.entries()) {

        // Exibir valores do formulário
        console.log("Pair", pair);

        if(pair[password] == '123') {

            // Senha Correta
            console.log("Senha Correta");

            senha_correta = true;
        
        } else {

            // Senha Inorreta
            console.log("Senha Incorreta");

            senha_correta = false;

        } // Fim do if validação senha

    } // Fim do loop dos dados do formulário

    // Remover Alertas
    alerta.classList.remove('alert-sucess');
    alerta.classList.remove('alert-danger');

    if(senha_correta) {

        alerta.innerHTML = "Login Executado com Sucesso.";

        // Adicionar Alerta de Sucesso
        alerta.classList.add('alert-sucess');

        window.location.href = 'dashboard.html';

        // Exibir Alerta
        // alerta.style.display = 'block';

    } else {

        alerta.innerHTML = "Usuário e/ou Senha inválidos.";

        // Adicionar Alerta de Erro
        alerta.classList.add('alert-danger');

        // Exibir Alerta
        // alerta.style.display = 'block';

    } // Fim validação senha incorreta

    // Alerta
    console.log("Alerta", alerta);

    // Email
    console.log("Email", email);

    // Password
    console.log("Password", password);

    // Rememberme
    console.log("Rememberme", rememberme);

    //Fim validarLogin
    console.log("Fim validarLogin");

} // Fim do validarLogin

window.onload = function() {

    //Início Windows OnLoad
    console.log("Início Windows OnLoad");

    // Criar variável para objeto botao_submit
    var botao_submit  = document.getElementById("botao_submit");

    // Botao_Submit
    console.log("Botao_Submit", botao_submit);

    // Executar Método validarLogin
    validarLogin();

    // Fim Windows OnLoad
    console.log("Fim Windows OnLoad");

} // Fim do OnLoad

// Fim Script.js
console.log("Fim Script.js");