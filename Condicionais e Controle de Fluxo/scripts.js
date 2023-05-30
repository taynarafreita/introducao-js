// Control Flow

// If e else

/*
let temperature = 37.0
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}
*/

// switch


function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 2))


// Throw
/*
function sayMyName(name = '') {
    if(name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

// try... catch

try {
    sayMyName('taynara')

} catch(e) {
    console.log(e)
}

console.log('após o catch')
*/