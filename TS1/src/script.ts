function calcular(): void {
    const raioInput = document.getElementById("raio") as HTMLInputElement;
    const raio = parseFloat(raioInput.value);

    const area = Math.PI * raio * raio;
    const circunferencia = 2 * Math.PI * raio;

    const areaInput = document.getElementById("area") as HTMLInputElement;
    const circunferenciaInput = document.getElementById("circunferencia") as HTMLInputElement;

    areaInput.value = area.toFixed(2);
    circunferenciaInput.value = circunferencia.toFixed(2);
}
