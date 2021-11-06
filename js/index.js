function valida() {
    var nomeEmpresa = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var endereco = document.getElementById("endereco");
    var numeroCasa = document.getElementById("numeroCasa");
    var bairro = document.getElementById("bairro");
    var cep = document.getElementById("cep");
    var cidadeEstado = document.getElementById("cidadeEstado");
    var senha = document.getElementById("senha");

    if (nomeEmpresa.value == "") {
        alert("Preencha o nome da Empresa!");
        return false;
    }
    if (email.value == "" || email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1) {
        alert("Preencha o campo de Email!");
        return false;
    }
    if (telefone.value.length == 0) {
        alert("Preencha o campo de Telefone!");
        return false;
    }
    if (endereco.value.length == 0) {
        alert("Preencha o campo de Endereço!");
        return false;
    }
    if (numeroCasa.value.length == 0) {
        alert("Preencha o campo de Número do Local!");
        return false;
    }
    if (bairro.value.length == 0) {
        alert("Preencha o campo Bairro!");
        return false;
    }
    if (cep.value.length == 0) {
        alert("Preencha o campo CEP!");
        return false;
    }
    if (cidadeEstado.value.length == 0) {
        alert("Preencha o campo Cidade e Estado!");
        return false;
    }
    if (senha.value.length == 0) {
        alert("Preencha o campo Senha!");
        return false;
    }
    document.getElementById("form").submit();
}