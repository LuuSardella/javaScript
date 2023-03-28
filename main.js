/*
console.log("Hola Mundo")
let nombre = "Luciana"
let edad = 35
console.log("Hola " + nombre)*/

let continuar = true
while (continuar) {
    let nombre
    let edad
    let disponibilidad

    nombre = prompt("Ingrese su nombre")
    do { 
        edad = parseInt (prompt("Ingrese su edad"))
    }while(isNaN(edad))
    
    disponibilidad = prompt("Indique si su turno lo prefiere por la mañana tarde o noche")

    let TurnoAsignado
    switch (disponibilidad) {
        case "mañana":
            TurnoAsignado = "Su turno fue reservado a las 10:00am"
            break
        case "tarde":
            TurnoAsignado = "Su turno fue reservado a las 14:00hs"
            break
        case "noche":
            TurnoAsignado = "Su turno fue reservado a las 20:00hs"
            break
    
        default:
            TurnoAsignado = "No se encontraron turnos en ese horario"
            break;
    }
    alert(resultado)
    let continuar = confirm("queres reservar otro turno?")
    }


