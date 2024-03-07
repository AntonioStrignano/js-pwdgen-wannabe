let nome = prompt('Inserisci il tuo nome') //string | null
console.log('Nome: ' + nome)

let cognome = prompt('Inserisci il tuo cognome') //string | null
console.log('Cognome: ' + cognome)

let colore = prompt('Qual è il tuo colore preferito?') //string | null
console.log('Colore preferito: ' + colore)

let numero = prompt('Indica un numero da utilizzare')
console.log('Numero: ' + numero)

let pswd = nome + cognome + colore + numero
console.log('Password composta: ' + pswd)

let cifre = prompt('Indica il numero di cifre del numero randomico da generare')
console.log('Numero di cifre: ' + cifre)
let rdmNum = Math.random() * (10 ** cifre)

let pswdRandom = nome + cognome + colore + Math.round(rdmNum)
console.log('Password randomica: ' + pswdRandom)