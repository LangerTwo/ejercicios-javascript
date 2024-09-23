function dibujarTrifuerza(n) {
    // Calcula el tamaño de la fila más grande
    const maxFila = 2 * n - 1;
    let result = ' ';
  
    // Función auxiliar para dibujar un triángulo
    function dibujarTriangulo(filas) {
      for (let i = 0; i < filas; i++) {
        // Espacios en blanco antes de los asteriscos
        const espacios = " ".repeat(maxFila - i - 1);
        const asteriscos = "*".repeat(2 * i + 1);
        result += espacios + asteriscos + '\n';
      }
    }
  
    // Dibujar el triángulo superior
    dibujarTriangulo(n);
  
    // Dibujar los triángulos inferiores
    for (let i = 1; i <= n; i++) {
      const espaciosIzq = ' '.repeat(n - i);
      const asteriscos = '*'.repeat(i * 2 - 1);
      const espaciosMedio = ' '.repeat(2 * (n - i) + 1);
      result += espaciosIzq + asteriscos + espaciosMedio + asteriscos + '\n';
    }
  
    console.log(result);  // Imprimir todo el resultado al final
  }
  
  // Solicitar al usuario el número de filas
  const n = parseInt(prompt("Ingrese el número de filas de los triángulos: "));
  
  // Dibujar la Trifuerza
  dibujarTrifuerza(n);