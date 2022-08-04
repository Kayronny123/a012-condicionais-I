// Escreva um código que receba três valores. Uma idade, um booleano que
//  responda se a pessoa terminou ou não o ensino médio, e um booleano que responda 
// se a pessoa está cursando alguma faculdade.
// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;
// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else`
//  para imprimir que a afirmacão não é verdadeira.
// <details>
// <summary>Exemplo</summary>
// Caso a primeira pessoa tenha idade >=18:
// <b>"A pessoa é maior de idade"</b>
// e caso não seja:
// <b>"A pessoa é menor de idade"</b>
// </details


let idade = prompt ('Digite sua idade');
let ensinoMedioConcluido = prompt('concluiu o ensino médio? digite 1 para "SIM" e 2 para "NÃO" ' );
let isCursandoOutraFaculdade = prompt ('Está cursando a faculdade se "SIM" digite 1 e descubra novas formas de dar um up na sua carreira, caso não, o que está esperando? digite "2" e venha se preparar pra o mercado de trabalho  ')

    if(idade >= 18){
        alert ("Você é maior de idade")
    } else if (idade < 18)
        alert ('Você ainda é menor de idade');

    if (ensinoMedioConcluido == 1 ) {
        alert ('Muito bem! Conhecimento nunca é demais, que tal se preparar para o ENEM? clique em OK e garanta sua promoção no nosso programa intensivão ENEM-MODULO-1')
    } else if (ensinoMedioConcluido == 2 )
        alert ('Acredito em você, boa sorte nos seus estudos garanta já um promoção e conheça nosso kit reforço do segundo grau, clique em OK para saber mais!')

    if (isCursandoOutraFaculdade == 1 ) {
        alert ('Muito bem! Continue assim! Que tal investir mais ainda e garantir um upgrade no seu currículo!! Clique em OK e vamos te apresentar nossas propostas!!')
    } else if (isCursandoOutraFaculdade == 2 )
        alert ('O que está esperando para começar? Já conhece nossa programa de bolsa de estudos?  Clique em OK e vamos te apresentar nossas propostas!!')