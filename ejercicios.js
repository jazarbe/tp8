// #region ej1
const nombre = document.getElementById("nombre")
const fechaNac = document.getElementById("fechaNac")
const resultado = document.getElementById("resultado")
const formEdad = document.getElementById('formEdad')

formEdad.addEventListener('submit', e => {
    e.preventDefault()
    const hoy = new Date()
    const nacimiento = new Date(fechaNac.value)
    let edad = hoy.getFullYear() - nacimiento.getFullYear()
    
    const mesNac = nacimiento.getMonth()
    const diaNac = nacimiento.getDate()
    if (hoy.getMonth() < mesNac || (hoy.getMonth() === mesNac && hoy.getDate() < diaNac)) {
        edad--
    }

    if (edad == 0){
        edad = hoy.getMonth() - mesNac
        if (hoy.getMonth() === mesNac && hoy.getDate() < diaNac) {
            edad--
        }

        resultado.textContent = `Hola ${nombre.value}, tenés ${edad} mes(es)`
    }
    else if(edad < 0)
    {
        resultado.textContent = `Todavía no pasó esa fecha!`
    }
    else resultado.textContent = `Hola ${nombre.value}, tenés ${edad} año(s)`
})
// #endregion

// #region ej2
const frutas = ["banana", "melón", "frutilla", "fruta", "damasco", "tomate", "kiwi", "sandía", "limón", "mora"]
const frutaInput = document.getElementById("fruta")
const resultado2 = document.getElementById("resultado2")
const formFrutas = document.getElementById('formFrutas')

formFrutas.addEventListener('submit', e => {
    e.preventDefault()
    if(frutas.includes(frutaInput.value.toLowerCase())) resultado2.textContent = `Si, tenemos ${frutaInput.value}`
    else resultado2.textContent = `No tenemos ${frutaInput.value}`
})
// #endregion

// #region ej3
const comp1 = (10 == '10')
const comp2 = (10 === '10')
const tipo = 10.6
const ver = (true == 1)
console.log(`Ejercicio 3:`, comp1, comp2, typeof tipo, ver)
// #endregion

// #region ej4
const ciudad = {
    id: 0,
    nombre: 'jazcity',
    fechaFundacion: new Date(),
    poblacion: 2,
    extension: 100
}
console.log(`Ejercicio 4:`, ciudad)

// #endregion

// #region ej5
const arr = [0, 2, 6, 21, 1, 8]
console.log(`Ejercicio 5:`, doubleArray(arr))

// #endregion

// #region ej6
const ast = '*'
console.log(`Ejercicio 6:`) 
for(let i = 1; i <= 5; i++) console.log(ast.repeat(i))
piramide(5)

// #endregion

// #region ej7
const inputNombres = document.getElementById('nombres')
const formA = document.getElementById("formA")
const resultado7 = document.getElementById('resultado7')

formA.addEventListener('submit', e => {
    e.preventDefault()
    const arrNombres = inputNombres.value.split(',')
    const nombresConA = arrNombres.filter(nombre => 
        nombre.trim().toLowerCase().startsWith('a')
    )
    if(nombresConA.length > 0) resultado7.textContent = nombresConA.join(', ')
    else resultado7.textContent = `No hay nombres con "A".`
})
// #endregion

// #region ej8
const cadena = document.getElementById("cadena")
const palabra = document.getElementById("palabra")
const reemplazo = document.getElementById("word")
const formReemp = document.getElementById("formReemp")
const resultado8 = document.getElementById("resultado8")

formReemp.addEventListener('submit', e => {
    e.preventDefault()
    resultado8.textContent = cadena.value.replaceAll(palabra.value, reemplazo.value)
})

// #endregion

// #region ej9
const form = document.getElementById("formCorto")
const texto = document.getElementById("texto")
const num = document.getElementById("num")
const resultado9 = document.getElementById('resultado9')

form.addEventListener('submit', e => {
    e.preventDefault()
    resultado9.textContent = texto.value.slice(0, num.value)
})

// #endregion

// #region ej10
const formSeparador = document.getElementById('formSeparador')
const palabras = document.getElementById('palabras')
const resultado10 = document.getElementById('resultado10')

formSeparador.addEventListener('submit', e => {
    e.preventDefault()
    let palabrasConGuion = palabras.value.replaceAll(',' , ' -');
    resultado10.textContent = palabrasConGuion
})

// #endregion

// #region ej11
const formRec = document.getElementById('formRec')
const lista = document.getElementById('lista')
const resultado11 = document.getElementById('resultado11')

formRec.addEventListener('submit', e => {
    e.preventDefault()
    resultado11.textContent = "Recaudación total: $" + separarPrecios(lista.value)
})

// #endregion