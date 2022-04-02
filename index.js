import entradaDados from 'readline-sync'


console.log('Aplicação de juros: \n\n')

let valorDevido = entradaDados.question('Informe o valor devido: R$ ')

if (valorDevido > 0) {

    let diasAtrasados = entradaDados.question('Informe quantos se passaram desde o vencimento do boleto: ')

    if (diasAtrasados > 0) {

        let taxaJuros

    if (diasAtrasados <= 15) {
        taxaJuros = 5
    }
    else {
        taxaJuros = 10
    }


    let juros = Number(valorDevido) * (taxaJuros / 100)

    let valorTotal = Number(valorDevido) + Number(juros)



    console.log('\nValor original da divida: R$ ' +valorDevido)
    console.log('Dias em atraso: ' +diasAtrasados)
    console.log('Taxa de juros: ' +taxaJuros+ '%')
    console.log('Valor do juros: R$ ' +juros)
    console.log('Valor total com juros: R$ ' +valorTotal)
    console.log('\n')

    }

    else {
        console.log('Você está em dias com a sua dívida!')
    }

}

else {
    console.log('O valor da dívida deve ser maior que zero! \n')
}

