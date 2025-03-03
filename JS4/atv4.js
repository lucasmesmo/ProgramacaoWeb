function calcularCirculo() {

    const raio = parseFloat(document.getElementById("raio").value);
    
    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, insira um valor válido para o raio.");
        return;
    }
    
    const area = Math.PI * Math.pow(raio, 2);
    const circunferencia = 2 * Math.PI * raio;
    
    document.getElementById("area").value = area.toFixed(2);
    document.getElementById("circunferencia").value = circunferencia.toFixed(2);
}