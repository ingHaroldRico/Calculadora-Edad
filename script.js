
const fe_nacimiento=document.getElementById("f_nacimiento")
const result=document.getElementById("resultado")

function mostrar(edad){
    result.innerText="Tu edad es " + edad +" Años"
}
function validacion(añoNacimiento,añoActual){
    if (añoNacimiento >= añoActual){
        alert("Ingresa una fecha valida")
        result.innerText="Año Ingresado debe ser menor al Año actual"
        return false
    }
    if(isNaN(añoNacimiento)){
        alert("Ingresa una fecha valida")
        result.innerText="Debes Seleccionar todos los Datos de tu nacimiento"
        return false
    }
    return true
}

function calcularEdad(){
    let datoNacimento=new Date (fe_nacimiento.value)

    let añoNacimiento=datoNacimento.getFullYear()
    let añoActual=new Date().getFullYear()


    //jj
    if(validacion(añoNacimiento,añoActual)==false){
        return 
    }


    let meses=new Date().getMonth()-datoNacimento.getMonth()
    let dias=new Date().getDate()-datoNacimento.getDate()
    let edad=añoActual-añoNacimiento

    if(meses<0 || (meses==0 && dias <= 0)){
        edad=edad-1
        mostrar(edad)

        // let edad=añoActual-añoNaceimiento
        // result.innerText="Tu edad es " + edad +" Años"
    }
    else{
        mostrar(edad)
    }
    
   
}