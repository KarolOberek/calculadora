prompt = require ('prompt-sync')()
while(true){

    let num1 = +prompt("Digite o primeiro número: ")
    while (isNaN(num1)) {
        console.log("Insira apenas caracteres numéricos.")
        num1 = +prompt("Digite o primeiro número: ")
    }
    let num2 = +prompt("Digite o segundo número: ")
    while (isNaN(num2)){
        console.log("Insira apenas caracteres numéricos.")
        num2 = +prompt("Digite o segundo número: ")
        }

    console.log("Digite a operação desejada: \nadição (1) \nsubtração (2) \nmultiplicação (3) \ndivisão (4) \nporcentagem (5)")
    let operacao= prompt().toLocaleLowerCase().trim()

switch (operacao) {
    case "1":
        console.log(`Número ${num1} somado a ${num2} é: ${num1+num2}`)
        break;
    case "2":
        console.log(`Número ${num1} menos ${num2} é: ${num1-num2}`)
        break;
    case "3":
        console.log(`Número ${num1} multiplicado ${num2} é: ${num1*num2}`)
        break;
    case "4":
        if (num2 !==0){
        console.log(`Número ${num1} dividido por ${num2} é: ${num1/num2}`)
        break;
        }else {
            console.log("Erro na operação: divisão por 0 não é permitida!!")
        }
    case "5":
        console.log(`${num2}%  de ${num1} é: ${num1*num2 /100}`)
        break;
    default:
        console.log("Digite uma operação válida")
        operacao = undefined
        break;
}
let sair = prompt("Deseja sair?").toLowerCase()
    if (sair == "sim"){
        break
    }
}