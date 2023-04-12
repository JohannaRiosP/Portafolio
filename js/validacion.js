export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

const tipoDeErrores =[
    "valueMissing",
    "typeMismatch",
];



const mensajesDeError={
    nombre:{
        valueMissing: "Este campo no puede estar vacio"
    },
    email:{
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es válido"
    },
    celular:{
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es válido"
    },
    asunto:{
        valueMissing: "Este campo no puede estar vacio",
    },
    mensaje:{
        valueMissing: "Este campo no puede estar vacio",
    },

}

const validadores = {
    celular: input => validarCelular(input)
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach( error => {
       if (input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error]; 
       } 
    })
    return mensaje
}

function validarCelular(input){
    const celular = input.value
    console.log(celular)
    let mensaje = "";
    if(celular.length>16 || celular.length<10){
        mensaje = "Escriba un número válido"
    } 
    input.setCustomValidity(mensaje)
}
