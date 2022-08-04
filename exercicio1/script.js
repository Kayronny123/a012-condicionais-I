// Crie um código que receba uma const numérica qualquer. Crie um `if` para verificar 
// se o número guardado na const é
//  **par**. Caso seja, imprima no console a mensagem: "o número é par".

const num = prompt ('Digite um número')

if(num){
    console.log("Seu número é par")
} else if (num % 2) {
    console.log('dado invalido')
}