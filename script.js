const textoCript = document.querySelector(".first")
const textoDescript = document.querySelector(".second")


function criptografia(string) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let index = 0; index < matriz.length; index++) {
        if (string.includes(matriz[index][0])) {
            string = string.replaceAll(matriz[index][0], matriz[index][1]);
        }
    }
    return string;
}

function resultadoCriptografia() {
    const resultadoCript = criptografia(textoCript.value);
    textoDescript.value = resultadoCript;
    textoCript.value = "";
}

function descriptografia(string) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let index = 0; index < matriz.length; index++) {
        if (string.includes(matriz[index][1])) {
            string = string.replaceAll(matriz[index][1], matriz[index][0]);
        }
    }
    return string;
}

function resultadoDescriptografia() {
    const resultadoDescript = descriptografia(textoCript.value);
    textoDescript.value = resultadoDescript;
    textoCript.value = "";
}

function copiando() {
    let textArea = document.querySelector(".second");
    textArea.select();
    document.execCommand("copy");
}

/*As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/