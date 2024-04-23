"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejemplos variables de texto
let texto1 = "9";
let texto2 = '17';

//  Verifique  cual de los dos textos es mayor alfabéticamente
//  Imprima en pantalla según corresponda

if(texto1>texto2){
    console.log("el texto   " +  texto1  +   " es mayor alfabeticamente.");
}else if(texto1<texto2){
    console.log("el texto   "  +  texto2  +    " es mayor alfabeticamente.");
}else{
    console.log("  ambos textos son iguales alfabeticamente  ");
}
//  Transforma esas variables tipo texto y almacénalas
//  en nuevas variables númericas (Number) con parseInt()
//  Repita el proceso, ¿Cuál de las nuevas variables es mayor?
//  Imprima en pantalla según corresponda
let numero1 = parseInt(texto1);
let numero2 = parseInt(texto2);

if (numero1<numero2){
    console.log(" el numero "+numero2+" es mayor.");
}else if(numero1>numero2){
    console.log(" el numero "+numero1+" es mayor.");
}else{
    console.log("ambos son iguales")
}
//  Para pensar!
//  ¿Por qué cree que texto_2 es mayor a texto_1?
//  Siendo números tiene sentido, pero son caracteres, texto,
//  aún así el operador arroja el mismo resultado que con las
//  variables numéricas, cierto? ¿Por qué creen que es así?
//  Esta pregunta estará repetida en el Campus para que puedan
//  responder.
/*JavaScript compara cadenas de texto según su orden 
lexicográfico (basado en Unicode), lo que puede dar lugar 
a resultados sorprendentes. ¡La respuesta está en la naturaleza 
de cómo se comparan las cadenas! 😊
//  NOTA: La respuesta no se encuentra en el apunte, sino en Google ;)*/
