var palpite, numeroSorteado, tentativas = 1

    numeroSorteado = Math.floor(Math.random() * 100)
    console.log(numeroSorteado)


palpite = parseInt(prompt("Digite um número entre 1 e 100: "))

while (palpite != numeroSorteado) { 
    if (palpite < numeroSorteado) {
        alert("O número sorteado é maior!")
    }
    if (palpite > numeroSorteado) { 
        alert("O número sorteado é menor!")
    }

    palpite = parseInt(prompt("Tente novamente: "))

    tentativas++
}
alert("Parabéns! Você acertou o número " + numeroSorteado + " em " + tentativas + " tentativas.") 
