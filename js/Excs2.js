function classificarNota(nota) {
    if (nota >= 70) {
        console.log("Aprovado");
    } 
    else if (nota >= 50) {
        console.log ("Recuperação");
    }
    else {
        console.log ("Reprovado");
    }
}
classificarNota(65);