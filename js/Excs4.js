function calcularFrete(peso) {
    if (peso <= 5) {
        return frete=20;
    } 
    else if(peso > 5 && peso <= 20) {
      return frete=50;
    } 
     else{
        return frete= 100;
    }
}
calcularFrete(12);
console.log(frete);

