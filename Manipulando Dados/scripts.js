let string = "123"

console.log(Number(string))

let number = 321

console.log(String(number).length)


let word = "Paralelepipedo"
console.log(word.length)

let numero = 439.29482343284
console.log(numero.toFixed(2))

let frase = "Programar é muito bacana!"
console.log(frase.toUpperCase())

let phrase = "Eu quero viver o amor!"

let myArray = phrase.split(" ") //separa as palavras em um array
console.log(myArray)
let phraseWithUnderscore = myArray.join("_") // substitui os espaços por _
console.log(phraseWithUnderscore.toLowerCase())

console.log(phrase.includes("amoR")) //case sensitive

// Criar array com construtor
let meuArray = new Array('a', 'b', 'c')
console.log(meuArray)
console.log(meuArray.length)

// transformar uma string em elementos de um array
console.log(Array.from(word))

// Manipulando arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

// remover do fim
//techs.pop()

// remover do começo
//techs.shift()

//pegar somente alguns elementos do array
//console.log(techs.slice(1,3))


//remover 1 ou mais itens em qualquer posição do array
//techs.splice(1,2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 2)

console.log(techs)