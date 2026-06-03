function calcularRendimento() {
    // Captura os valores inseridos pelo usuário
    const valorInicial = parseFloat(document.getElementById('valor').value);
    const anos = parseInt(document.getElementById('anos').value);
    const resultadoBox = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    // Validação simples dos campos
    if (isNaN(valorInicial) || isNaN(anos) || valorInicial <= 0 || anos <= 0) {
        alert("Por favor, insira valores válidos e maiores que zero!");
        return;
    }

    // Taxa de rendimento fictícia anual média do Agronegócio (ex: 10% ao ano)
    const taxaAnual = 0.10; 
    
    // Cálculo de Juros Compostos: M = P * (1 + i)^t
    const valorFinal = valorInicial * Math.pow((1 + taxaAnual), anos);
    const lucro = valorFinal - valorInicial;

    // Formatação dos valores para a moeda Real (R$)
    const valorFinalFormatado = valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const lucroFormatado = lucro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Exibe a resposta na página
    textoResultado.innerHTML = `Se você investir <strong>R$ ${valorInicial.toFixed(2)}</strong> hoje no Agronegócio, em um cenário estimado de 10% ao ano, ao final de <strong>${anos} anos</strong> você terá aproximadamente <strong>${valorFinalFormatado}</strong>.<br><br>Isso representa um crescimento de <strong>${lucroFormatado}</strong> gerado pelo campo!`;
    
    // Remove a classe que esconde a caixa de resultado
    resultadoBox.classList.remove('hidden');
}
