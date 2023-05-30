// function expression ou function anonymous

// parâmetros (parameters)
const sum = function(number1, number2) {
    let total = number1 + number2
    return total

}

let number11 = 34
let number22 = 25
sum(2, 3) // arguments - argumentos
sum(4, 5)
sum(number11, number22)

console.log(`o numero 1 é ${number11}`)
console.log(`o numero 2 é ${number22}`)
console.log(`a soma é ${sum(number11, number22)}`)