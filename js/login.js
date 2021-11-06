function valida() {
    
    var email = document.getElementById("email");
    var senha = document.getElementById("senha")

    if (email.value == "" || email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1) {
        alert("Preencha o campo de Email!");
        return false;
    }
    if (senha.value.length == 0) {
        alert("Preencha o campo Senha!");
        return false;
    }
}