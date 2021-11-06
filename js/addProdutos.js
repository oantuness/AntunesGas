function valida() {
    
    var nomeProduto = document.getElementById("nomeProduto")
    var precoBalcao = document.getElementById("precoBalcao")
    var precoEntrega = document.getElementById("precoEntrega")
    var regiao = document.getElementById("regiao")
    var descricao = document.getElementById("descricao")

    if (nomeProduto.value == "") {
        alert("Preencha o nome do Produto!")
        return false;
    }
    if (precoBalcao.value.length == 0) {
        alert("Preencha o preço do produto na retirada do balcão!")
        return false;
    }
    if (precoEntrega.value.length == 0) {
        alert("Preencha o preço do produto para entrega!")
        return false;
    }
    if (regiao.value == "") {
        alert ("Preencha a região!")
        return false;
    }
    if (descricao.value == "") {
        alert("Preencha a descrição do produto!")
        return false
    }
    document.getElementById("form").submit();
}
