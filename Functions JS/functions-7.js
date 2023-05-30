/* Function() constructor

* expressão new
* criar um novo objeto
* this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const taynara = new Person('Taynara')
const robson = new Person('Robson')
console.log(taynara.walk())
console.log(robson.walk())

