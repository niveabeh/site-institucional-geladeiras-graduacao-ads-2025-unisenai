const formulario = document.getElementById("frmFormulario");
let respAlert = document.getElementById("respAlert");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("entrou");

    const validaNome = /^[A-zà-ü]{3,}([ ][A-zà-ü]{2,}?)+$/ig;
    const validaFone = /^[(][0-9]{2}[)][ ][0-9]{4,5}[-][0-9]{4}$/;
    const validaEmail = /^[a-z]{3,}(.)?([a-z]{3,})?([0-9]{1,})?[@][a-z]{3,}[.][a-z]{3}[.]?(br)?$/;
    let nome = document.getElementById("nome").value;
    let fone = document.getElementById("fone").value;
    let email = document.getElementById("email").value;


    if (!validaNome.test(nome)) {
        alert("Por favor, preencha o campo com nome e sobrenome");
        respAlert.innerText = `Por favor, preencha o campo com nome e sobrenome`;
        nome.focus();
        return false;
    }

    if (!validaFone.test(fone)) {
        alert("Por favor, preencha o campo com DDD e número de telefone (ex: (11)99999-9999)");
        respAlert.innerText = `Por favor, preencha o campo com DDD e número de telefone (ex: (11)99999-9999)`;
        fone.focus();
        return false;
    }

    if (!validaEmail.test(email)) {
        alert("Por favor, preencha o campo com um e-mail válido");
        respAlert.innerText = `Por favor, preencha o campo com um e-mail válido`;
        email.focus();
        return false;
    }

    respAlert.innerText = `Formulário enviado com sucesso!`;
    alert("entrou");
    return false;
});


//essa função funcionou
// function ValidaFormu() {
//     alert("Entrei");

//     const regexNome = /^[A-zà-ü]{3,}([ ][A-zà-ü]{2,}?)+$/ig;
//     let nome = document.getElementById('nome').value;


//     if (!regexNome.test(nome)) {
//         alert("Nome incorreto");
//         return false;

//     } else {

//         console.log(nome);
//         return false;
//     }
// }