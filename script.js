
const fe_nacimiento=document.getElementById("f_nacimiento")
const result=document.getElementById("resultado")

function calcularEdad(){
    let datoNacimento=new Date (fe_nacimiento.value)
    let añoNacimiento=datoNacimento.getFullYear()
   
    let añoActual=new Date().getFullYear()

     if (añoNacimiento >=añoActual){
        alert("Ingresa una fecha valida")
        result.innerText="Año Ingresado debe ser menor al Año actual"
        return
    }
    if(isNaN(añoNacimiento)){
        alert("Ingresa una fecha valida")
        result.innerText="Debes Seleccionar todos los Datos de tu nacimiento"
        return

    }
    else{

        let edad=añoActual-añoNacimiento
        result.innerText="Tu edad es " + edad +" Años"
    }
    
}