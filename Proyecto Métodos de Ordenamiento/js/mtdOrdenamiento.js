function ordenamiento() {
    var datos = document.getElementById('datos').value;
    var datosArray = datos.split(',').map(function(numero) {
        return parseFloat(numero.trim());
    });

    // Aplicar los métodos de ordenamiento
    var mtdBurbuja = burbuja(datosArray.slice());
    var mtdQuicksort = quicksort(datosArray.slice());
    var mtdShellsort = shellsort(datosArray.slice());

    // Mostrar los resultados
    resultadoFinal("Burbuja: " + mtdBurbuja.join(','));
    resultadoFinal("Quicksort: " + mtdQuicksort.join(','));
    resultadoFinal("Shellsort: " + mtdShellsort.join(','));

    // Realizar búsquedas
    var buscNum = parseFloat(prompt("Ingrese el número a buscar:"));
    var resSecuencial = busquedaSecuencial(datosArray, buscNum);
    resultadoFinal("Búsqueda Secuencial: " + resSecuencial);
    var numOrdenados = quicksort(datosArray.slice());
    var resBinario = busquedaBinaria(numOrdenados, buscNum);
    resultadoFinal("Búsqueda Binaria: " + resBinario);
}

// Implementación del método Burbuja
function burbuja(array) {
    var n = array.length;
    for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-i-1; j++) {
            if (array[j] > array[j+1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

// Implementación del método Quicksort
function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    var pivot = array[0];
    var izqu = [];
    var dere = [];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            izqu.push(array[i]);
        } else {
            dere.push(array[i]);
        }
    }
    return quicksort(izqu).concat(pivot, quicksort(dere));
}

// Implementación del método Shellsort
function shellsort(array) {
    var n = array.length;
    for (var gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        for (var i = gap; i < n; i++) {
            var temp = array[i];
            var j;
            for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }
            array[j] = temp;
        }
    }
    return array;
}

// Implementación búsqueda secuencial
function busquedaSecuencial(array, target) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return "Dato encontrado en la posición " + (i + 1);
        }
    }
    return "Dato no encontrado";
}

// Implementación búsqueda binaria
function busquedaBinaria(array, target) {
    var izqu = 0;
    var dere = array.length - 1;
    while (izqu <= dere) {
        var mid = Math.floor((izqu + dere) / 2);
        if (array[mid] === target) {
            return "Dato encontrado en la posición " + (mid + 1);
        } else if (array[mid] < target) {
            izqu = mid + 1;
        } else {
            dere = mid - 1;
        }
    }
    return "Dato no encontrado";
}

function borrarResultados() {
    var resultadosDiv = document.getElementById('resultados');
    while (resultadosDiv.firstChild) {
        resultadosDiv.removeChild(resultadosDiv.firstChild);
    }
}

function resultadoFinal(resultado) {
    var resultadoElement = document.createElement('p');
    resultadoElement.textContent = resultado;
    document.getElementById('resultados').appendChild(resultadoElement);
}
