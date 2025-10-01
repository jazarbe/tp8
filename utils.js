function doubleArray(arr){
  let resultado = arr.map(num => num * 2)
  return resultado
}

function piramide(n){
  for (let i = 1; i <= n; i++) {
    let estrellas = "*".repeat(2 * i - 1)
    let guiones = "-".repeat(n - i)
    console.log(guiones + estrellas + guiones)
  }
}

function separarPrecios(texto){
  let obj = texto.split(', ')
  let total = 0

  for (let i = 0; i < obj.length; i++) {
    let item = obj[i].trim();
    if (item === "") continue;
    let [nombre, precio] = item.split(':');
    total += Number(precio);
  }
  return total.toFixed(2);
}