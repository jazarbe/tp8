// 1
const nombre = document.getElementById("nombre")
const fechaNac = document.getElementById("fechaNac")
const resultado = document.getElementById("resultado")
const formEdad = document.getElementById('formEdad')

function CalcularEdad(fechaNac) {
    const hoy = new Date()

    let edad = hoy - fechaNac

    resultado.textContent = `Hola ${nombre}, tenés ${edad}`
}

formEdad.addEventListener('submit', () => {
    const hoy = new Date()

    let edad = hoy - fechaNac

    resultado.textContent = `Hola ${nombre}, tenés ${edad}`
})