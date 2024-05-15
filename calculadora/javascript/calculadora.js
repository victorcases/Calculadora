// Seleccionar elementos del HTML
const screen = document.querySelector(".screen");
const numeros = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operator");
const eliminar = document.querySelector(".eliminar");
const final = document.querySelector(".final");
const borrar = document.getElementById("borrar");
const raiz = document.getElementById('raiz');
const logaritmo10 = document.getElementById('logaritmo');
const logaritmo2 = document.getElementById('logaritmo2');

// Poner en la pantalla un 0 en el momento que se le de a C.
eliminar.addEventListener("click", () => {
    screen.value = "";
});

// Calcular el resultado final al darle al =
final.addEventListener("click", function() {
    const escrito = screen.value;
    if (escrito) {
      const resultado = eval(escrito);
      screen.value = resultado;
    }
});

//Array que agrupa todos los números y permite concatenar en caso de darle más de una vez al número en
numeros.forEach(numero => {
  numero.addEventListener("click", function() {
    if (screen.value.length > 15) {
        alert("Has excedido el límite de dígitos.");
        return;
    }
    screen.value += this.value;
  });
});

//Array que agrupa todos los operadores
operadores.forEach(operator => {
  operator.addEventListener("click", function() {
    screen.value += this.value;
  });
});

// Cálculo de la raíz cuadrada. Parseamos a float puesto que lo coge como String y el resultado pueda tener decimales.
raiz.addEventListener("click", function() {
  const escrito = parseFloat(screen.value);
  if (escrito >= 0) {
      const resultado = Math.sqrt(eval(escrito));
      screen.value = resultado;}
    else {
      alert("El número introducido es un número negativo")
    }
  });

  // Cálculo del  Logaritmo base 10. Parseamos a float puesto que lo coge como String, para que éste tenga decimales.
logaritmo10.addEventListener("click", function() {
  const escrito = parseFloat(screen.value);
  if (escrito === "0") {
    alert("El número introducido debe ser mayor de 0.");}
    else {
      const resultado = Math.log10(eval(escrito));
      screen.value = resultado;    }
    });

   // Cálculo del Logaritmo base 2. Parseamos a float puesto que lo coge como String, para que éste tenga decimales.
logaritmo2.addEventListener("click", function() {
  const escrito = parseFloat(screen.value);
  if (escrito >= 0) {
      const resultado = Math.log2(eval(escrito));
      screen.value = resultado;}
    else {
      alert("El número introducido debe de ser positivo.")
    }
  });

  // Funcionalidad de Borrar. Eliminar el último número pulsado.

  borrar.addEventListener("click", function (){
   let escrito = screen.value;
    if (escrito.length >= 0){
      escrito = escrito.slice(1,-1);
      screen.value = escrito;
    }
  });