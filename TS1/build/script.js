"use strict";
function calcular() {
    const raioInput = document.getElementById("raio");
    const raio = parseFloat(raioInput.value);
    const area = Math.PI * raio * raio;
    const circunferencia = 2 * Math.PI * raio;
    const areaInput = document.getElementById("area");
    const circunferenciaInput = document.getElementById("circunferencia");
    areaInput.value = area.toFixed(2);
    circunferenciaInput.value = circunferencia.toFixed(2);
}
