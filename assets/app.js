function calcular(tipo, valor) {
    if (tipo === 'acao') {
        if (valor === 'c') {
            document.querySelector('input').value = null
        } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.querySelector('input').value += valor
        } else if (valor === '=') {
            let result = document.querySelector('input').value
            document.querySelector('input').value = eval(result)

        }

    } else if (tipo === 'num') {
        document.querySelector('input').value += valor
    }
}