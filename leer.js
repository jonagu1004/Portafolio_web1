function leer() {
    const nombre = document.getElementById("user").value.trim();
    const password = document.getElementById("pass").value.trim();
    const carrera = document.getElementById("carrera").value;
    const generoSeleccionado = document.querySelector('input[name="genero"]:checked');

    let genero = "No especificado";
    if (generoSeleccionado) {
        genero = generoSeleccionado.value;
    }

    const resultadoHTML = `
        <p><strong>Nombre:</strong> ${nombre || "No ingresado"}</p>
        <p><strong>Password:</strong> ${password ? "*****" : "No ingresado"}</p>
        <p><strong>Carrera:</strong> ${carrera}</p>
        <p><strong>Género:</strong> ${genero}</p>
    `;

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
