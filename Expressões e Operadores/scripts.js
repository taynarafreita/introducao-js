/* Expressões e Operadores

Operadores unários: typeof, delete

*/

/*
const person = {
    name: "Taynara",
    age: 24,
}

delete person.age
console.log(person)

// Operadores aritméticos

// multiplicação
console.log(3.2 * 5)

// divisão
console.log(12 / 2)

// soma
console.log(34 + 67)

// subtração
console.log(34 - 23)

// resto da divisão - oq sobra depois de dividir
console.log(11 % 9)

// incremento
let increment = 0
increment++
increment++
increment++
console.log(increment)

// decremento
let decrement = 0
decrement--
console.log(decrement)

// exponencial **
console.log(2 ** 3)


//Grouping operator ()
let total  = (2 + 3) * 5
console.log(total)
*/

//Operadores de Comparação
// Irá comparar valores e retornar um Boolean como resposta à comparação
/*
let one = 1
let two = 2


// == igual a
console.log(two == 1)
console.log(one == "1")

// != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// === estritamente igual a
console.log(one === "1")
console.log(one === 1)

// !== estritamente diferente de
console.log(two !== "2")
console.log(two !== 2)

// > maior que
console.log(one > two)

// >= maior igual a
console.log(one >= 1)
console.log(two >= 1)

// < menor que 
console.log(one < two)

// <= menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)
*/

// Operadores de atribuição (assignment)

/*
let x

// assignment
x = 1


//addition assignment
x += 2
console.log(x)

//subtraction assignment
x -= 1
console.log(x)

//multiplication assignment
x *= 2
console.log(x)

//division assignment
x /= 2
console.log(x)

// remainder, exponetiation
//x %= 2
x **= 2
console.log(x)

*/

// Operadores lógicos (logical operators)

/*
let pao = true
let queijo = true

// && and
console.log(pao && queijo)

// || or
console.log(pao || queijo)

// ! not
console.log(!pao)
*/

// Operador Condicional (Ternário)
// Dependendo da condição, nós receberemos valores diferentes
// condição então valor 1 se não valor 2
// condição ? valor1 : valor 2

/*
let age = 18
const canDrive = age >= 18 ? 'can drive' : "can't drive"

console.log(canDrive)
*/

// Operador de String ( String operator)
// concatenação
// retorna a união de duas strings

/*
let alpha = 'alpha'

console.log(alpha + 'bet')
*/

// Falsy e Truthy
/*
//Falsy: quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
// false, 0, -0, "", null, undefined, NaN
console.log(0 ? 'verdadeiro' : 'falso')
*/
//Truthy: quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
// true, {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinity
console.log(true ? 'verdadeiro' : 'falso')

