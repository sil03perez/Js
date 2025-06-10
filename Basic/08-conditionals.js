//if, else if, else

//if(si)  else (si no)
let age = 37

if(age == 37){
    console.log(`la edad es ${age}`)
}else{
        console.log(`la edad no es 37`)

}

//else if

if(age == 37){
    console.log(`la edad es ${age}`)
}else if(age< 10){
        console.log(`es menor de edad`)
}else{
            console.log(`la edad no es 37 ni es menor de edad`)
}

//Operador ternario

const msj= age == 37 ? `la edad es ${age}` : `la edad no es ${age}`
console.log(msj)

//Switch
let day = 0
let dayName

switch(day){
    case 0:
        dayName = "Lunes"
            break
          case 1:
            dayName ="Martes"  
                break
                    case 2:
                        dayName = "Miercoles"
                            break
                                case 3:
                                    dayName = "Jueves"
                                        break
                                            case 4:
                                                dayName = "Viernes"
                                                    break
                                                        case 5:
                                                            dayName = "Sabado"
                                                                break
                                                                    case 6:
                                                                    dayName = "Domingo"
                                                                         break
                                                                            default : dayName= "Dia incorrecto"


}

console.log(dayName)