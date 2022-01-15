function somar(){
    var txt1 = window.document.getElementById('txt1')// Essa variavel guardou o valor do input de texto usando o getElementById
    var txt2 = window.document.getElementById('txt2')
    var n1 = Number(txt1.value)// A função Number transforma o valor string que esta guardado na variavel em number
    var n2 = Number(txt2.value)
    var res = window.document.getElementById('resultado')
    var s = n1 + n2
    res.innerHTML = `Resultado: ${s}`
}
function subtrair(){
    var txt1 = window.document.getElementById('txt1')// Essa variavel guardou o valor do input de texto usando o getElementById
    var txt2 = window.document.getElementById('txt2')
    var n1 = Number(txt1.value)// A função Number transforma o valor string que esta guardado na variavel em number
    var n2 = Number(txt2.value)
    var res = window.document.getElementById('resultado')
    var s = n1 - n2
    res.innerHTML = `Resultado: ${s}`
}
function dividir(){
    var txt1 = window.document.getElementById('txt1')// Essa variavel guardou o valor do input de texto usando o getElementById
    var txt2 = window.document.getElementById('txt2')
    var n1 = Number(txt1.value)// A função Number transforma o valor string que esta guardado na variavel em number
    var n2 = Number(txt2.value)
    var res = window.document.getElementById('resultado')
    var s = n1 / n2
    res.innerHTML = `Resultado: ${s}`
}
function multiplicar() {
    var txt1 = window.document.getElementById('txt1')// Essa variavel guardou o valor do input de texto usando o getElementById
    var txt2 = window.document.getElementById('txt2')
    var n1 = Number(txt1.value)// A função Number transforma o valor string que esta guardado na variavel em number
    var n2 = Number(txt2.value)
    var res = window.document.getElementById('resultado')
    var s = n1 * n2
    res.innerHTML = `Resultado: ${s}`

}
