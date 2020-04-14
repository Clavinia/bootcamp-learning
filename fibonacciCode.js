function fibonacciGenerator (n) {

    //Establecemos a fuego los dos primeros valores
    var n1 = 0;
    var n2 = 1;
    var fibArray = [n1, n2];

    // Usamos un slice para mostrar el resultado cortado por n, 
    // así que me resbala usar una comprobación inicial para los casos de 1 y 2.
    
    // El loop de fibonacci a tras los dos primeros valores
    for (var i = 2; i <= n; i++) {
      var lastNumber = fibArray.length - 1;
      var newNumber = fibArray[lastNumber] + fibArray[lastNumber - 1];
      fibArray.push( newNumber );
    }     
    
    //Devolvemos el valor del array cortado por n.
    return fibArray.slice(0, n);

}

fibonacciGenerator (20);
