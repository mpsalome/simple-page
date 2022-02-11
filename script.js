// const criada apenas para exemplificar escopo de variaveis 
const SIX = 6

window.onload = function() {
   let personObj = getJsonFrom('{ "name": "Erick Schimdt", "age": 32, "height": 1.78}')
   fillPageWith(personObj)
   console.log(`Testando addSixTo(10): ${addSixTo(10)}`)
   console.log(`Testando addSixTo(21): ${addSixTo(21)}`)
   console.log(`Testando duplicate(): ${duplicate([1,2,3,4,5])}`)

};

function fillPageWith(obj) {
    document.getElementById('name').innerHTML = obj.name
    document.getElementById('age').innerHTML = obj.age
    document.getElementById('height').innerHTML = obj.height
}

function addSixTo(value) {
    return Number(value) + SIX
}

function duplicate(arr) {
    arr.push(...arr)
    return arr
}

function getJsonFrom(string) {
    return JSON.parse(string)
}