let firstName = prompt ("Primeiro nome:")
let lastName = prompt ("Segundo nome:")
let local = prompt ("Local de estudo:")
let yearBirthday = prompt ("Ano de Nascimento:")

console.log(firstName)
console.log(lastName)
console.log(local)
console.log(yearBirthday)

let date = new Date()
let year = date.getFullYear()

let ageRecruit = year-yearBirthday

alert ("Bem-vindo, "+ firstName + " " + lastName + "!" + "\nSeu local de estudos é: " + local + "\nIdade: " + ageRecruit)

