// 1

let borde = document.querySelector('#img1')
borde.addEventListener("click", function () {
    borde.classList.toggle("red-border")
} );


// 2
const boton1 = document.querySelector(".calculo")
boton1.addEventListener("click", function() {
    let canti1 = document.querySelector("#cant1").value
    let canti2 = document.querySelector("#cant2").value
    let canti3 = document.querySelector("#cant3").value
   
    let total = Number(canti1) + Number(canti2) + Number(canti3)

    if (total >10){
        document.querySelector('#resultado').textContent = 'Llevas demasiados stickers';
    } else{
        document.querySelector('#resultado').textContent = 'Llevas ' + total + ' stickers';
    }
}) 

// 3
const intento = document.querySelector(".ingresar")
intento.addEventListener("click", function(){
    let in1 = document.querySelector('#num1').value
    let in2 = document.querySelector('#num2').value
    let in3 = document.querySelector('#num3').value

    if (in1 === "9" && in2 === "1" && in3 === "1"){
        document.querySelector('#un-success').textContent = 'Password 1 correcto'
    } else if (in1 == 7 && in2 == 1 && in3 == 4){
        document.querySelector('#un-success').textContent = 'Password 2 correcto'
    } else {
        document.querySelector('#un-success').textContent = 'Password Incorrecto'
    }
})
