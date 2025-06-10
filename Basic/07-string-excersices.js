// 1. Concatena dos cadenas de texto
let nombre = "silvana"
let apellido = "hola, tu nombre es " +nombre+ " perez"
console.log(apellido)

// 2. Muestra la longitud de una cadena de texto
console.log(apellido.length)

// 3. Muestra el primer y último carácter de un string
console.log(apellido[0])
console.log(apellido[31])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(apellido.toUpperCase())
console.log(apellido.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let parrafo = `lorem ipsum amet nosek
                blableblibli sisiñikiñki`

console.log(parrafo)   

// 6. Interpola el valor de una variable en un string

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(parrafo.replace(" ", '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(apellido.includes("silvana"))

// 9. Comprueba si dos strings son iguales

// 10. Comprueba si dos strings tienen la misma longitud