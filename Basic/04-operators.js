//operadores

//operadores aritmeticos
console.log("----------------------------------------------------------------")
console.log("operadores aritmeticos")
console.log("----------------------------------------------------------------")

let a = 5
let b = 10

console.log(a+b) //suma
console.log(a-b)//resta
console.log(a/b)//division
console.log(a*b)//multiplicacion 

console.log(a%b)//Modulo
console.log(a**b)//exponente

a++ //incremento
console.log(a)

b--//decremento
console.log(b--)

//Operadores de asignacion
console.log("----------------------------------------------------------------")
console.log("operadores asignacion")
console.log("----------------------------------------------------------------")

let myVariable = 2 //(= es el que asigna)
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable += 2
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Operadores de comparacion
console.log("----------------------------------------------------------------")
console.log("operadores comparacion")
console.log("----------------------------------------------------------------")

console.log(a>b)
console.log(a<b)
console.log(10>=10)
console.log(a<=b)
console.log(a==6) //igualdad por valor
console.log(a === '6')
console.log(a==a)
console.log(a===a)
console.log(a != 6)
console.log(a !== '6')

console.log(0 == false, '0 ')
console.log(1 == false, '1 ')
console.log(2 == false, '2')
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "hola")


//operadores logicos
console.log("----------------------------------------------------------------")
console.log("operadores logicos")
console.log("----------------------------------------------------------------")


//and(&&)

console.log(5>10 && 15>20)
console.log(5<10 && 15<20)
console.log(5<10 && 15>20)

//or(||)

console.log(5>10 || 15>20)
console.log(5<10 || 15<20)
console.log(5<10 || 15>20)

console.log(5>10 && 15>20 || 30<40)

//not(!)

console.log(!(5>10 && 15>20))
console.log(!(5>10 || 15>20))

// Operadores ternarios
console.log("----------------------------------------------------------------")
console.log("operadores ternarios")
console.log("----------------------------------------------------------------")

const isRainig = true

isRainig ? console.log("Esta lloviendo") :console.log("No Esta lloviendo")

console.log("----------------------------------------------------------------")









