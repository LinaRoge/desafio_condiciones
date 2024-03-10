/*let edad = +prompt("Ingresa la edad");
if (edad >= 18) {
  console.log(
    (document.getElementById("miDiv").style.backgroundColor = "orange")
  );
} else {
  document.getElementById("miDiv").style.backgroundColor = "pink";
}*/
var activo = true; //valida que el borde de la imagen este activo

//la funsión cantidad para validar la cantidad de stickers
function cantidad() {
  valor1 = document.querySelector("#input1").value;
  valor2 = document.querySelector("#input2").value;
  valor3 = document.querySelector("#input3").value;
  let cantidad = Number(valor1) + Number(valor2) + Number(valor3);
  if (cantidad <= 10) {
    par = document.querySelector("#secret-result");
    par.innerHTML = "Llevas " + cantidad + " stickers";
  } else if (cantidad > 10) {
    par = document.querySelector("#secret-result");
    par.innerHTML = "Llevas demasiados stickers";
  }
}
//la funsión resultado para validar la contraseña
function resultado() {
  var digito1 = document.getElementById("digito1");
  var valordigito1 = digito1.value;
  var digito2 = document.getElementById("digito2");
  var valordigito2 = digito2.value;
  var digito3 = document.getElementById("digito3");
  var valordigito3 = digito3.value;

  let resultado = valordigito1 + valordigito2 + valordigito3;
  let valor = Number(resultado);
  if (valor === 911) {
    par = document.querySelector("#secret-result");
    par.innerHTML = "El password 1 es correcto";
  } else if (valor === 714) {
    par = document.querySelector("#secret-result");
    par.innerHTML = "El password 2 es correcto";
  } else {
    par = document.querySelector("#secret-result");
    par.innerHTML = "El password es incorrecto";
  }
}
