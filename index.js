//Prova 15-06
//Questão 1
function numPrimo(num) {
    for (var i = 2; i < num; i++) 
    if (num % i == 0) return false;
    return true;
}

var determinadoNumero = 1000;

for (var i = 2; i < determinadoNumero; i++) if (numPrimo(i)) console.log(i);

//Questão 2
function validarSenha(senha) {
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;

    if (senha.length < 8) {
        return false;
    }

    if (!regexMaiuscula.test(senha)) {
        return false;
    }

    if (!regexMinuscula.test(senha)) {
        return false;
    }

    if (!regexNumero.test(senha)) {
        return false;
    }

    return true;
}


const senha = prompt("Digite uma senha:");


if (validarSenha(senha)) {
    console.log("A senha é válida.");
} else {
    console.log("A senha é inválida. Certifique-se de atender aos critérios.");
}

//Questão 3
function fatUmDez(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  for (let i = 1; i <= 10; i++) {
    console.log(`O fatorial de ${i} é: ${fatUmDez(i)}`);
  }
  
//Questão 4
console.log("Digite um número e iremos verificar se é um quadrado perfeito!");

function ehQuadradoPerfeito(numero) {
  // Verifica se a raiz quadrada do número é um número inteiro
  const raiz = Math.sqrt(numero);
  return Number.isInteger(raiz);
}

function handleConsoleInput(input) {
  const numero = Number(input);

  if (!isNaN(numero)) {
    if (ehQuadradoPerfeito(numero)) {
      console.log(`O número ${numero} é um quadrado perfeito.`);
    } else {
      console.log(`O número ${numero} não é um quadrado perfeito.`);
    }
  } else {
    console.log("Digite um número válido.");
  }
}

(function consoleInputLoop() {
  const input = prompt("Digite um número:");
  handleConsoleInput(input);
  consoleInputLoop();
})();
