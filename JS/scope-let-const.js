// let e const são apenas locais e só funcionam no escopo onde foi criada

// local só funciona no escopo

let y = 1

{
    y = 0
    console.log('> existe y?', y)

}

console.log('> existe y depois do bloco?', y)


const z = 1

{
   const z = 0
    console.log('> existe z?', z)

}

console.log('> existe z depois do bloco?', z)
