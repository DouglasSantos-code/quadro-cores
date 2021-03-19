window.addEventListener('load', () => {
    // Capturando Tabela
    var table = document.querySelector('table');

    // Adc Listener de change
    table.addEventListener('input', (event) => {
        // Capturando inputs que receberão os resultados
        let [resultRed, resultGreen, resultBlue] = Array.from(document.querySelectorAll("input[type='text']"));

        // Capturando o valor dos elementos range
        let [inputRed, inputGreen, inputBlue] = Array.from(document.querySelectorAll("input[type='range']"));

        resultRed.value = inputRed.value;
        resultGreen.value = inputGreen.value;
        resultBlue.value = inputBlue.value;

        var quadrado = document.querySelector('.content');
        quadrado.style.backgroundColor =
            'rgb(' + resultRed.value + ',' + resultGreen.value + ',' + resultBlue.value + ')';
    });
})






















/* window.addEventListener('load', start);

function start() {
    // Capturando Tabela
    var table = document.querySelector('table');

    // Adc Listener de change
    table.addEventListener('input', function (event) {
        // Capturando inputs que receberão os resultados
        let [resultRed, resultGreen, resultBlue] = Array.from(document.querySelectorAll("input[type='text']"));

        // Capturando o valor dos elementos range
        let [inputRed, inputGreen, inputBlue] = Array.from(document.querySelectorAll("input[type='range']"));

        resultRed.value = inputRed.value;
        resultGreen.value = inputGreen.value;
        resultBlue.value = inputBlue.value;

        var quadrado = document.querySelector('.content');
        quadrado.style.backgroundColor =
            'rgb(' +
            resultRed.value + ',' +
            resultGreen.value + ',' +
            resultBlue.value + ')';
    });
} */