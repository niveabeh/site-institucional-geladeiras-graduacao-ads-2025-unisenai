const formulario = document.getElementById("frmFormulario");

formulario.addEventListener("submit", function (e) {

    alert("entrou");
    let nome = document.getElementById("nome").value;
    let fone = document.getElementById("fone").value;
    let email = document.getElementById("email").value;
    let respAlert = document.getElementById("respAlert").value;


    const validaNome = /^[A-zà-ü]{3,}([ ][A-zà-ü]{2,}?)+$/ig;
    const validaFone = /^[(][0-9]{2}[)][ ][0-9]{4,5}[-][0-9]{4}$/;
    const validaEmail = /^[a-z]{3,}(.)?([a-z]{3,})?([0-9]{1,})?[@][a-z]{3,}[.][a-z]{3}[.]?(br)?$/;

    e.preventDefault();
    
    if (!validaNome.test(nome)) {
        respAlert.innerText = `Por favor, preencha o campo com nome e sobrenome`;
        nome.focus();
        return false;
    }

    if (!validaFone.test(fone)) {
        respAlert.innerText = `Por favor, preencha o campo com DDD e número de telefone (ex: (11)99999-9999)`;
        fone.focus();
        return false;
    }

    if (!validaEmail.test(email)) {
        respAlert.innerText = `Por favor, preencha o campo com um e-mail válido`;
        email.focus();
        return false;
    }

    respAlert.innerText = "Formulário enviado com sucesso!";
    formulario.submit();
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