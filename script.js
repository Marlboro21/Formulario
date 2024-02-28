function validateForm() {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var age = document.getElementById('age').value;
    var birthdate = document.getElementById('birthdate').value;
    var product = document.getElementById('product').value;


    if (firstName === '' || lastName === '' || age === '' || birthdate === '' || product === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    if (isNaN(age) || age <= 0) {
        alert('Por favor, introduzca una edad válida.');
        return false;
    }

    var confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = `
        <p>Gracias por registrarte!</p>
        <p>Nombres: ${firstName}</p>
        <p>Apellidos: ${lastName}</p>
        <p>Edad: ${age}</p>
        <p>Fecha de Nacimiento: ${birthdate}</p>
        <p>Producto que Desea Comprar: ${product}</p>
    `;
    confirmation.style.display = 'block';

    return false;
}

//ar product = document.getElementById('product').value.trim();
