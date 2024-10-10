function calcularDesconto(preco, tipoCliente) {
    if (tipoCliente == "membro") {
        return desconto = (preco * 90)/100
    }
    else{
    return desconto = preco;
}
}
calcularDesconto(100,"membro");
console.log(desconto);