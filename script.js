
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
    let meses=new Date().getMonth()-datoNacimento.getMonth()
    let dias=new Date().getDate()-datoNacimento.getDate()
    let edad=añoActual-añoNacimiento

    if(meses<0 || (meses==0 && dias <= 0)){
        edad=edad-1
        result.innerText="Tu edad es " + edad +" Años"

        // let edad=añoActual-añoNaceimiento
        // result.innerText="Tu edad es " + edad +" Años"
    }
    else{
    
        result.innerText="Tu edad es " + edad +" Años"

    }
    
   
}