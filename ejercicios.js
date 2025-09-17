// 1
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

// 2
const frutas = ["banana", "melón", "frutilla", "fruta", "damasco", "tomate", "kiwi", "sandía", "limón", "mora"]
const fruta = document.getElementById("fruta")
const resultado2 = document.getElementById("resultado2")
const formFrutas = document.getElementById('formFrutas')

formFrutas.addEventListener('submit', e => {
    e.preventDefault
    console.log(fruta.value)
    if(frutas.includes(fruta.value)) resultado2.textContent = `Si, tenemos ${fruta.value}`
    else resultado2.textContent = `No tenemos ${fruta.value}`
})
