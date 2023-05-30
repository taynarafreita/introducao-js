// Estruturas de repetição

// for

/*
for( let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }

    console.log(i)
}
*/

// while
// usado mais quando não sabemos quando parar
/*
let i = 0;
while(i < 10) {
    console.log(i)

    i++;
}
*/

// for... of
// cria um loop através de alguma varíavel que tivermos
/*
let name = 'Taynara'
let names = ['João', 'Paulo', 'Pedro']

for(let name of names) {
    console.log(name)
}
*/

// for... in
// cria um loop em cima de um objeto, pegando as propriedades do objeto
/*
let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
    console.log(person.name)
}
*/