/**
 * Habilita o deshabilita el campo de cantidad basado en si el checkbox está marcado.
 * @param {HTMLInputElement} checkbox - El elemento checkbox que fue clickeado.
 * @param {string} inputId - El ID del campo de cantidad a habilitar/deshabilitar.
 */
function toggleCantidad(checkbox, inputId) {
    let cantidadInput = document.getElementById(inputId);
    if (checkbox.checked) {
        cantidadInput.disabled = false;
        cantidadInput.required = true;
        cantidadInput.value = 1; // Poner un valor por defecto
        cantidadInput.focus();
    } else {
        cantidadInput.disabled = true;
        cantidadInput.required = false;
        cantidadInput.value = '';
    }
}