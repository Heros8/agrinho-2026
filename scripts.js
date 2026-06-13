// Função para Alternar entre Modo Claro e Escuro
function alternarModoEscuro() {
    const corpoPagina = document.body;
    const botao = document.getElementById('btn-dark');
    
    // Liga ou desliga a classe de estilo escuro no HTML
    corpoPagina.classList.toggle('dark-mode-ativo');

    // Altera o texto do botão para combinar com o modo atual
    if (corpoPagina.classList.contains('dark-mode-ativo')) {
        botao.innerText = "☀️ Modo Claro";
    } else {
        botao.innerText = "🌙 Modo Escuro";
    }
}

// Função Avançada do Simulador Agrinho
function calcularSustentabilidade() {
    // Pegando valores das respostas (0 para ruim, 10 para sustentável)
    const energia = parseInt(document.getElementById('energia').value);
    const agua = parseInt(document.getElementById('agua').value);
    const residuos = parseInt(document.getElementById('residuos').value);

    const pontuacaoTotal = energia + agua + residuos;
    const divResultado = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    // Reseta as classes anteriores para evitar bugs visuais
    divResultado.className = ""; 

    // Criação de diagnósticos e feedbacks sob medida usando estruturas condicionais
    let sugestoesTecnicas = "";

    if (energia === 0) {
        sugestoesTecnicas += "<li><strong>Transição Energética:</strong> Sua propriedade usa fontes fósseis. Substituir por placas solares reduz a pegada de carbono e corta custos de produção a longo prazo.</li>";
    }
    if (agua === 0) {
        sugestoesTecnicas += "<li><strong>Manejo de Recursos Hídricos:</strong> A irrigação sem sensores causa desperdício. Instale sensores de umidade conectados para molhar a plantação apenas quando necessário.</li>";
    }
    if (residuos === 0) {
        sugestoesTecnicas += "<li><strong>Economia Circular:</strong> Queimar ou descartar resíduos incorretamente agride o ecossistema. Implemente a compostagem para gerar biofertilizantes gratuitos.</li>";
    }

    // Exibição dos resultados na tela de forma inteligente
    if (pontuacaoTotal === 30) {
        divResultado.classList.add('sucesso');
        textoResultado.innerHTML = `
            <h4>🏅 Pontuação: 30 / 30 - Fazenda Modelo!</h4>
            <p>Excelente! Sua propriedade virtual alcançou o equilíbrio perfeito exigido pelo tema do Agrinho 2026. Parabéns pelo uso exemplar da tecnologia verde!</p>
        `;
    } else {
        divResultado.classList.add('atencao');
        textoResultado.innerHTML = `
            <h4>⚠️ Pontuação: ${pontuacaoTotal} / 30 - Precisa de Melhorias</h4>
            <p>Para atingir o verdadeiro equilíbrio entre produção e meio ambiente, considere aplicar estas soluções de tecnologia agrícola no seu campo:</p>
            <ul>${sugestoesTecnicas}</ul>
        `;
    }

    // Exibe o bloco de resultado na tela de forma suave
    divResultado.style.display = "block";
}