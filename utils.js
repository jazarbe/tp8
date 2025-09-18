function doubleArray(arr){
  let resultado = arr.map(num => num * 2)
  return resultado
}

function piramide(n) {
  for (let i = 1; i <= n; i++) {
    let estrellas = "*".repeat(2 * i - 1)
    let guiones = "-".repeat(n - i)
    console.log(guiones + estrellas + guiones)
  }
}