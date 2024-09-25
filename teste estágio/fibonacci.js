// Função que verifica se o número pertence à sequência de Fibonacci
function isFibonacci(num) {
    if (num < 0) return false;

    let fib1 = 0, fib2 = 1, fib = 0;
    
    while (fib < num) {
        fib = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib;
    }

    return fib === num || num === 0;
}

// Função que será executada ao clicar no botão
function verificarFibonacci() {
    // Obtém o valor da caixa de texto
    let numero = document.getElementById("numero").value;

    // Converte o valor para número
    let num = parseInt(numero);

    // Verifica se é um número válido
    if (isNaN(num)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    // Verifica se o número pertence à sequência de Fibonacci
    if (isFibonacci(num)) {
        alert(num + " pertence à sequência de Fibonacci.");
    } else {
        alert(num + " NÃO pertence à sequência de Fibonacci.");
    }
}
