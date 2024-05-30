function gerarGrafico() {
    // Obtendo os valores do formulário
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);
    const valor4 = parseFloat(document.getElementById('valor4').value);
    const valor5 = parseFloat(document.getElementById('valor5').value);
    const largura = parseFloat(document.getElementById('largura').value);

    // Array com os valores das alturas das barras
    const valores = [valor1, valor2, valor3, valor4, valor5];

    // Obtendo o elemento do gráfico
    const grafico = document.getElementById('grafico');

    // Limpando qualquer gráfico anterior
    grafico.innerHTML = '';

    // Criando as barras
    valores.forEach(valor => {
        const barra = document.createElement('div');
        barra.style.width = largura + 'px';
        barra.style.height = valor + 'px';
        barra.classList.add('barra');
        grafico.appendChild(barra);
    });
}