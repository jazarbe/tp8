function toLowerCase(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i)
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(charCode + 32)
      } else {
        result += str[i]
      }
    }
    return result
}
  
function doubleArray(arr){
    let resultado = arr.map(num => num * 2)
    return resultado
}
