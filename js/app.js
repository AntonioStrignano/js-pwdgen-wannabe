let nome = prompt('Inserisci il tuo nome') //string | null
console.log(nome)

let cognome = prompt('Inserisci il tuo cognome') //string | null
console.log(cognome)

let colore = prompt('Qual è il tuo colore preferito?') //string | null
console.log(colore)

let numero = prompt('Indica un numero da utilizzare')
console.log(numero)

let pswd = nome + cognome + colore + numero


console.log(pswd)
let cifre = prompt('Indica il numero di cifre del numero randomico da generare')

let rdmNum = Math.random() * (10 ** cifre)
console.log(rdmNum)

let pswdRandom = nome + cognome + colore + Math.round(rdmNum)
console.log(pswdRandom)