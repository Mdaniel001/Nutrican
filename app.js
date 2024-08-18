function calcular() {
    // Capturar los valores ingresados
    const x0 = document.getElementById('x0').value.split(',').map(Number);
    const x1 = document.getElementById('x1').value.split(',').map(Number);
    const E = document.getElementById('errors').value.split(',').map(Number);

    // Calcular Y'(x0) y Y'(x1)
    const Y_x0 = 0.5 * E[0] + 0.3 * E[1] + 0.2 * E[2];
    const Y_x1 = 0.6 * E[0] + 0.25 * E[1] + 0.15 * E[2];

    // Calcular x_r
    const factor = Y_x1 / (Y_x1 - Y_x0);
    const x_r = [
        x1[0] - factor * (x1[0] - x0[0]),
        x1[1] - factor * (x1[1] - x0[1]),
        x1[2] - factor * (x1[2] - x0[2])
    ];

    // Mostrar el resultado
    document.getElementById('resultado').textContent = `Proporciones ideales: ${x_r.map(n => n.toFixed(2)).join(', ')}`;
}
