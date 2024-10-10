function classificarTemperatura(temperatura) {
    if (temperatura < 15) {
        console.log("Frio");
    } 
    else if (temperatura >= 15 && temperatura <= 25) {
       console.log("Agradavel");
    } 
    else {
      console.log("Quente");
    }
}
classificarTemperatura(22);
