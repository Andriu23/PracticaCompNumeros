let numero1;
let numero2;
let numero3;

do {
    numero1 = Number(prompt("Ingrese el 1er número:"));
    numero2 = Number(prompt("Ingrese el 2do número:"));
    numero3 = Number(prompt("Ingrese el 3er número:"));

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        alert("Debe ingresar únicamente números.");
    }

} while (isNaN(numero1) || isNaN(numero2) || isNaN(numero3));


function comparar() {

    let mayor = document.getElementById("mayor");
    let menor = document.getElementById("menor");

    if (numero1 >= numero2 && numero1 >= numero3) {
        if (numero2 >= numero3) {
            mayor.textContent = `${numero1}, ${numero2}, ${numero3}`;
        } else {
            mayor.textContent = `${numero1}, ${numero3}, ${numero2}`;
        }
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        if (numero1 >= numero3) {
            mayor.textContent = `${numero2}, ${numero1}, ${numero3}`;
        } else {
            mayor.textContent = `${numero2}, ${numero3}, ${numero1}`;
        }
    } else {
        if (numero1 >= numero2) {
            mayor.textContent = `${numero3}, ${numero1}, ${numero2}`;
        } else {
            mayor.textContent = `${numero3}, ${numero2}, ${numero1}`;
        }
    }

    if (numero1 <= numero2 && numero1 <= numero3) {
        if (numero2 <= numero3) {
            menor.textContent = `${numero1}, ${numero2}, ${numero3}`;
        } else {
            menor.textContent = `${numero1}, ${numero3}, ${numero2}`;
        }
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        if (numero1 <= numero3) {
            menor.textContent = `${numero2}, ${numero1}, ${numero3}`;
        } else {
            menor.textContent = `${numero2}, ${numero3}, ${numero1}`;
        }
    } else {
        if (numero1 <= numero2) {
            menor.textContent = `${numero3}, ${numero1}, ${numero2}`;
        } else {
            menor.textContent = `${numero3}, ${numero2}, ${numero1}`;
        }
    }

    if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
        console.log("¡Algunos números son iguales!");
    }
}

comparar();