document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if (isNaN(subtotal) || isNaN(porcentaje) || subtotal <=0 || porcentaje <0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    const propina =subtotal*(porcentaje/100);
    const total =subtotal+propina;

    document.getElementById("resultadoPropina").textContent = `$${propina.toFixed(2)}`;
    document.getElementById("resultadosubtotal").textContent = `$${total.toFixed(2)}`;
});
