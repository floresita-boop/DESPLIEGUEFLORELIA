function contadorRegresivo(number) {
    let resultado = [];
    while (number >= 0) {
        resultado.push(number);
        number--;
    }
    return resultado; 
}

function mostrarContador() {
    const numero = parseInt(document.getElementById("numeroInput").value);
    const resultado = contadorRegresivo(numero);

    document.getElementById("resultados").textContent =
        "Cuenta regresiva: " + resultado.join(", ");
}


function mostrarSuma() {
    const zona = document.getElementById("zona-dinamica");

    zona.innerHTML = `
        <label>Inicio:</label>
        <input type="number" id="inicioInput">

        <label>Fin:</label>
        <input type="number" id="finInput">

        <button id="btnSumaPares">Calcular suma de pares</button>

        <p id="resultadoSumaPares"></p>
    `;

    document
        .getElementById("btnSumaPares")
        .addEventListener("click", calcularSumaPares);
}

function sumEvenNumbers(start, end) {
    let suma = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) suma += i;
    }
    return suma;
}

function calcularSumaPares() {
    const inicio = parseInt(document.getElementById("inicioInput").value);
    const fin = parseInt(document.getElementById("finInput").value);
    const resultado = document.getElementById("resultadoSumaPares");

    if (isNaN(inicio) || isNaN(fin)) {
        resultado.textContent = "❌ Ingresa valores válidos";
        return;
    }

    resultado.textContent =
        `La suma de los números pares entre ${inicio} y ${fin} es: ${sumEvenNumbers(inicio, fin)}`;
}

// ================== EJERCICIO 8 ==================
function showOddNumbers(limit) {
    let resultado = "";
    let i = 1;

    do {
        if (i % 2 !== 0) resultado += i + " ";
        i++;
    } while (i <= limit);

    return resultado.trim();
}

function procesarLimite() {
    const limite = parseInt(document.getElementById("numeroInput").value);

    if (isNaN(limite) || limite <= 0) {
        document.getElementById("resultados").textContent = "❌ Número inválido";
        return;
    }

    document.getElementById("resultados").innerHTML =
        `Impares: ${showOddNumbers(limite)}`;
}

function calculatePower(base, exponent) {
    let resultado = 1;
    for (let i = 1; i <= exponent; i++) {
        resultado *= base;
    }
    return resultado;
}

function mostrarPotencia() {
    const base = parseFloat(document.getElementById("numero1").value);
    const exponent = parseFloat(document.getElementById("numero2").value);

    if (isNaN(base) || isNaN(exponent)) {
        document.getElementById("resultados").textContent = "❌ Datos inválidos";
        return;
    }

    document.getElementById("resultados").innerHTML =
        `Resultado: ${calculatePower(base, exponent)}`;
}

function generateFibonacci(terms) {
    let resultado = [];
    let a = 0, b = 1;

    for (let i = 0; i < terms; i++) {
        resultado.push(a);
        let temp = a + b;
        a = b;
        b = temp;
    }

    return resultado.join(" ");
}

function procesarTerminos() {
    const terms = parseInt(document.getElementById("numeroInput").value);

    if (isNaN(terms) || terms <= 0) {
        document.getElementById("resultados").textContent = "❌ Número inválido";
        return;
    }

    document.getElementById("resultados").innerHTML =
        `Fibonacci: ${generateFibonacci(terms)}`;
}

// ================== CONTROL PRINCIPAL ==================
if (typeof document !== "undefined") {
    const btn = document.getElementById("btncalcular");

    if (btn) {
        btn.addEventListener("click", () => {
            const operacion = document.getElementById("operacion").value;

            switch (operacion) {
                case "contador":
                    mostrarContador();
                    break;

                case "sumaPar":
                    mostrarSuma();
                    break;

                case "impares":
                    procesarLimite();
                    break;

                case "potencia":
                    mostrarPotencia();
                    break;

                case "secuencia":
                    procesarTerminos();
                    break;

                default:
                    alert("Operación no válida");
            }
        });
    }
}


export {contadorRegresivo,calculatePower,sumEvenNumbers, showOddNumbers, generateFibonacci
};