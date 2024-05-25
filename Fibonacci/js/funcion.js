const FRMFIBONACCI = document.querySelector("#formfibu");
FRMFIBONACCI.addEventListener("submit",calfibunacci);
function calfibunacci(evt){
    evt.preventDefault();
    let x=document.querySelector("#numero").value;
    if(numero.value.length == 0){
        alert("Falta casillas por rellenar");
        return false;
    }
    let imprimir = document.getElementById("Resultado");
    imprimir.textContent ="El numeron Fibonacci es " + fibonacci(x);
}

const fibonacci = x  =>{
    if(x < 2){
         return x;
    }else{
        return fibonacci(x-1)+fibonacci(x-2);
    }
}