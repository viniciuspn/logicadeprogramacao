/*
Pensando em todos os números naturais inferiores a 10 que são múltiplos de 3 ou 5, temos 3, 5, 6 e 9. Somando esses múltiplos obtemos o valor 23.
 Utilize um algorítimo para calcular a soma de todos os múltiplos de 3 ou 5 abaixo de 1000
*/

console.log(somaMultiplos(1000));
function somaMultiplos(valor, soma) {
    if (!soma) {
        soma = 0;
    }
    if (valor === 0) {
        return soma;
    }
    if ((valor % 3) == 0 || (valor % 5) == 0) {
        soma = soma + valor;
    }
    valor = valor - 1;
    return somaMultiplos(valor, soma);
};