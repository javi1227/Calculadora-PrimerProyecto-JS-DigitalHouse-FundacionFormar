function dividir(numeroA, numeroB){
  if(numeroA == 0){
      return "No se puede dividir por cero";
  } else if(numeroB == 0){
      return "No se puede dividir por cero"
  } else {
      return numeroA / numeroB;
  }
}

module.exports = dividir 
