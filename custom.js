let input = document.getElementById('input');
let button=document.getElementById('button');
button.addEventListener('click',validar);


function validar () {
    let dni =input.value
    let numero = dni.slice(0,8);
    console.log(numero)
    let letra = dni.slice(8,9).toLowerCase();
 
    console.log (letra)
    let cadena=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
   
    if (isNaN(numero)|| !isNaN(letra)){
         alert ("Introduce un numero de 8 digitos y una letra");
    }else{
        let resultado = parseInt(numero) % 23;
        console.log(resultado);
        if(cadena[resultado]==letra){
            alert("El DNI es correcto")
        }else{
            alert("la letra es incorrecta, la letra correcta para "+ numero +" es: "+cadena[resultado])
        }

        }  
    
} 
