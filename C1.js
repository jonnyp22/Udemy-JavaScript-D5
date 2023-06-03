function verificar (){
    let ingreso = +document.getElementById("b1").value;


    let ingreso2 = document.getElementById("ingresar");
    let ingreso3 = document.getElementById("beber");  
    let ingreso4 = document.getElementById("entradaGratis");

    let  edad = ingreso >= 18 && ingreso <= 30;
    ingreso2.textContent= edad;

    let bebida = ingreso >= 18;
    ingreso3.textContent = bebida;

    let entrada = ingreso == 20 || ingreso == 25;
    ingreso4.textContent = entrada;


}
function huevo(){

    var huevoDos = +document.getElementById("huevito").value;
    let huevoTres = document.getElementById("desicion");

    if(huevoDos >= 50){

        huevoTres.textContent="No comprar huevo";
        huevoTres.style.color = "Red";


    }else if(huevoDos <= 49){

        huevoTres.textContent="Comprar huevo";
        huevoTres.style.color = "Green";

    }


}
function numeroUno(){

    let numeritoUno = +document.getElementById("numerito").value;
    let numeritoDos = document.getElementById("mensaje");

    if(numeritoUno === 1){

        alert("El número es Igual");
        numeritoDos.textContent="Felicidades";
        numeritoDos.style.color = "Green";

    }else{

        alert("El número es diferente");
        numeritoDos.textContent="Burro";
        numeritoDos.style.color = "Red";
    }
    
}
function precio(){

    let unidadUno = +document.getElementById("campoMayoreo").value;
    let unidadDos = document.getElementById("unidades");

    if (unidadUno >= 10 ){
        unidadDos.textContent= "$50";
        unidadDos.style.color="green";
    }else{
        unidadDos.textContent= "$80";
        unidadDos.style.color="blue";
    }

}
function cambio(){

    let elementoRespuesta =document.getElementById("textoPrecio");

    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = elementoFruta.value;

    switch (fruta){

            case '1':
                elementoRespuesta.textContent="$8.45";
                alert("funciona");
            break;

            case "2":
                elementoRespuesta.textContent="$10.45";
            break;

            case "3":
                elementoRespuesta.textContent="$11.45";
            break;

            case "4":
                elementoRespuesta.textContent="$12.45";
            break;
        }
}
