let resultado = 1;
function calcularFatorial(numero) {
    
    for (let i = numero; i>=1;i--) {
        resultado = resultado * i;
    }
}
calcularFatorial(5);
console.log(resultado);
