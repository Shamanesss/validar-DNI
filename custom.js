let dni = document.getElementById('dni');
let button=document.getElementById('button');
button.addEventListener('click',letra);
function letra () {
    let cadena="TRWAGMYFPDXBNJZSQVHLCKET";
    let posicion= dni.value%23;
    console.log(posicion)
    letra = cadena.substring(posicion,posicion+1);
    console.log(letra)
    


    } 