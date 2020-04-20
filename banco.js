let formulario = document.querySelector("#registro")
let usuario = formulario.querySelector("#usuario")
let saldo = formulario.querySelector("#saldo")
let login = document.querySelector(".login")
login.style.display = "none"
const elNombre = document.querySelector("h3.usuario")
const Valor = document.querySelector("h1.saldo")
class cuenta {
    constructor(usuario,saldo) {
      this.nombre = usuario;
      this.dinero = saldo;
    }
    agregarUsuario() {
        const elNombre = document.querySelector("h3.usuario")
        return elNombre.innerHTML= this.nombre
    }
    agregarSaldo(){
        return Valor.innerHTML=this.dinero
    }
  }
formulario.addEventListener('submit', () => agregarUsuario(event))

  function agregarUsuario(event) {
    event.preventDefault()
    event.stopPropagation()
    const nuevoUsuario = new cuenta(usuario.value, saldo.value)
    localStorage.setItem("nombre", nuevoUsuario.nombre);
    localStorage.setItem("saldo", nuevoUsuario.dinero);
    nuevoUsuario.agregarUsuario()
    nuevoUsuario.agregarSaldo()
    formulario.style.display = "none"
    login.style.display = "block"
}

let botonRetirar = document.querySelector("button.retirar");
botonRetirar.addEventListener('click', () => retirar())

function retirar(){
    let dineroAretirar = parseInt(prompt("Ingresa el valor a retirar"))
    let valorPrevio = parseInt(localStorage.getItem("saldo"));
    while(isNaN(dineroAretirar) == true){
      dineroAretirar = parseInt(prompt("Ingresa el valor a retirar"))
    }
    while (dineroAretirar > valorPrevio){
      dineroAretirar = parseInt(prompt("Saldos insuficientes, intente nuevamente"))
    }
    let valorFinal = valorPrevio - dineroAretirar
    localStorage.setItem("saldo", (valorFinal));
    Valor.innerHTML = valorFinal
}
let botonConsignar = document.querySelector("button.consignar");
botonConsignar.addEventListener('click', () => consignar())

function consignar(){
    let dineroAconsignar = parseInt(prompt("Ingresa el valor a consignar"))
    let valorPrevio = parseInt(localStorage.getItem("saldo"));
    while(isNaN(dineroAconsignar) == true){
      dineroAconsignarr = parseInt(prompt("Ingresa el valor a consignar"))
    }
    let valorFinal = valorPrevio + dineroAconsignar
    localStorage.setItem("saldo", (valorFinal));
    Valor.innerHTML = valorFinal
}