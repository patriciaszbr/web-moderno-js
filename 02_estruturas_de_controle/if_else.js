function imprimirResultado(nota) {
  if (nota >= 7) {
    console.log('Aprovado');
  } else {
    console.log('Reprovado');
  }
}

imprimirResultado(5);
imprimirResultado(8);
imprimirResultado('Testeando uma string');
