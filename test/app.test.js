import { contadorRegresivo,calculatePower,sumEvenNumbers,showOddNumbers,generateFibonacci} from "../src/app.js";

let pasadas = 0;
let fallidas = 0;

function test(nombre, actual, esperado) {
  if (actual === esperado) {
    console.log(`✔ ${nombre} pasado`);
    pasadas++;
  } else {
    console.log(`❌ ${nombre} fallido`);
    console.log(`   Esperado: ${esperado}`);
    console.log(`   Obtenido: ${actual}`);
    fallidas++;
  }
}


test(
  "Test 1: contador regresivo",
  contadorRegresivo(5).join(" "),
  "5 4 3 2 1 0"
);

test(
  "Test 2: potencia",
  calculatePower(2, 3),
  8
);

test(
  "Test 3: suma pares",
  sumEvenNumbers(1, 6),
  12
);

test(
  "Test 4: impares",
  showOddNumbers(5),
  "1 3 5"
);

test(
  "Test 5: fibonacci",
  generateFibonacci(5),
  "0 1 1 2 3"
);


console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas`);