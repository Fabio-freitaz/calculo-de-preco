let soma = 0;
function somaNumeros(n) {
    let i = 0;
    while (i <= n) {
        soma = soma + i;
        i++;
    }
}
somaNumeros(4);
console.log(soma);
