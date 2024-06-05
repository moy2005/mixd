var val1,val2,res,caja

caja=document.getElementById("res")

function suma(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            caja.innerHTML="Valores no validos en la caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            caja.innerHTML="Valores no validos en la caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1+val2
    caja.innerHTML=res
}

function resta(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            caja.innerHTML="Valores no validos en la caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            caja.innerHTML="Valores no validos en la caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1-val2
    caja.innerHTML=res
}

function multiplicacion(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            caja.innerHTML="Valores no validos en la caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            caja.innerHTML="Valores no validos en la caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1*val2
    caja.innerHTML=res
}

function division(){
    val1= parseFloat(document.getElementById("v1").value)
    val2= parseFloat(document.getElementById("v2").value)

    if(isNaN(val1) || isNaN(val2))
    {
        if(isNaN(val1)){
            caja.innerHTML="Valores no validos en la caja 1"
            document.getElementById("v1").focus()
            return
        }else{
            caja.innerHTML="Valores no validos en la caja 2"
            document.getElementById("v2").focus()
            return
        }
    }
    res=val1/val2
    caja.innerHTML=res
}
