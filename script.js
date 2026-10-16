function verificarIdade() {

    const nome = document.getElementById("campoNome").value;
    const idade = parseInt(document.getElementById("campoIdade").value);

    const resultado = document.getElementById("resultado");

    if (nome == "" || isNaN(idade) || idade < 0) {
        resultado.innerText = "Digite seu nome e uma idade valida!";
        console.log("Dados invalidos");
        return;
    }

    if (idade < 12) {

        resultado.innerText = `${nome}, você é uma criança.`;

    } else if (idade <= 17) {

        resultado.innerText = `${nome}, você é um adolescente.`;

    } else if (idade <= 59) {

        resultado.innerText = `Olá, ${nome}! Você tem ${idade} anos e seu acesso foi liberado com sucesso.`;

    } else {

        resultado.innerText = `${nome}, você tem ${idade} anos e pertence à terceira idade. Atendimento preferencial!`;

    }

    if (idade < 18) {

        let falta = 18 - idade;

        resultado.innerText += ` Faltam ${falta} ano(s) para atingir a maioridade.`;

    }

    console.log("Nome: " + nome);
    console.log("Idade: " + idade);

}