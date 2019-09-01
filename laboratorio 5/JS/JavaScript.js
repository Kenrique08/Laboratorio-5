alert("Bienvenido a esta pagina");

var tiempo1 = Date();

var nombre = prompt("ingrese su nombre");

var edad = prompt("hola "+nombre+" dime tu edad");
var edad2= "xxx";

if(edad>17){
    alert("Veo que eres mayor de edad "+nombre);
    edad2="mayor de edad";
    
}else{
    alert("Veo que eres menor de edad "+nombre);
    edad2="menor de edad";
}

var genero = prompt("¿Cual es tu genero "+nombre+" ?","hombre o mujer");

if(genero=='hombre'){
    document.getElementById('informacion').style.background='#0000FF';
}else{
    document.getElementById('informacion').style.background='#FF00FF';
}
document.getElementById('informacion').innerHTML+="Tu nombre es "+nombre+", tu edad es "+edad+
" años. Parece que eres "+edad2+" y eres "+genero+".";

var tiempo2= Date();
console.log("El usuario ingreso a la pagina en "+ tiempo1);
console.log("EL usuario termino de ingresar sus datos en "+ tiempo2);

var ano=new Date().getFullYear();

for(i=edad;i>=0;i--){
    document.getElementById('informacion').innerHTML+="<br>"+"tu edad en "+ano+
    " fue: "+i;
    ano=ano-1;
    if(i==18){
        document.getElementById('informacion').innerHTML+=" en este fecha cumpliste la mayoria de edad.";
    }else{
        "";
    }
}