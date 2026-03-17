document.getElementById("btn1").addEventListener("click", function() {
    const numero = prompt("Ingresa un número:");
    const n = Number(numero);
    
    if (!Number.isInteger(n) || n <= 0) {
        alert("Entrada inválida");
        return;
    }
    
    document.write("<h2>Tabla del 1 al " + n + "</h2>");
    document.write("<table border='1'>");
    document.write("<tr><th>n</th><th>n²</th><th>n³</th></tr>");
    
    for (let i = 1; i <= n; i++) {
        document.write("<tr>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + (i * i) + "</td>");
        document.write("<td>" + (i * i * i) + "</td>");
        document.write("</tr>");
    }
    
    document.write("</table>");
    document.write('<br><button onclick="window.location.reload()">Volver</button>');
});

document.getElementById("btn2").addEventListener("click", function() {
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    
    const inicio = new Date();
    const respuesta = Number(prompt(a + " + " + b + " = ?"));
    const fin = new Date();
    
    const correcto = respuesta === (a + b);
    const tiempo = ((fin - inicio) / 1000).toFixed(2);
    
    let html = "Resultado: " + (a + b) + "<br>";
    html += "Tu respuesta: " + respuesta + "<br>";
    html += "Estado: " + (correcto ? "Correcto" : "Incorrecto") + "<br>";
    html += "Tiempo: " + tiempo + " segundos";
    
    document.getElementById("resultado2").innerHTML = html;
});

function contador(arr) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) negativos++;
        else if (arr[i] === 0) ceros++;
        else positivos++;
    }
    
    return {negativos: negativos, ceros: ceros, positivos: positivos};
}

console.assert(contador([-1, 0, 2]).negativos === 1, "test 1");
console.assert(contador([-1, 0, 2]).ceros === 1, "test 2");
console.assert(contador([-1, 0, 2]).positivos === 1, "test 3");

document.getElementById("btn3").addEventListener("click", function() {
    const datos = [-3, 0, 5, 2, -1, 0, 7];
    const res = contador(datos);
    
    let html = "Arreglo: " + datos + "<br>";
    html += "Negativos: " + res.negativos + "<br>";
    html += "Ceros: " + res.ceros + "<br>";
    html += "Positivos: " + res.positivos;
    
    document.getElementById("resultado3").innerHTML = html;
});

function promedios(matriz) {
    const resultado = [];
    
    for (let i = 0; i < matriz.length; i++) {
        let suma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
        resultado.push(suma / matriz[i].length);
    }
    
    return resultado;
}

console.assert(promedios([[2, 4, 6]])[0] === 4, "test prom");

document.getElementById("btn4").addEventListener("click", function() {
    const m = [[10, 20, 30], [5, 5], [2, 4, 6]];
    const res = promedios(m);
    
    let html = "Matriz: " + JSON.stringify(m) + "<br>";
    html += "Promedios: " + res;
    
    document.getElementById("resultado4").innerHTML = html;
});

function inverso(numero) {
    const signo = numero < 0 ? -1 : 1;
    const invertido = String(Math.abs(numero)).split("").reverse().join("");
    return signo * Number(invertido);
}

console.assert(inverso(123) === 321, "test inverso");
console.assert(inverso(-45) === -54, "test inverso negativo");

document.getElementById("btn5").addEventListener("click", function() {
    const entrada = prompt("Ingresa un número:");
    const res = inverso(entrada);
    
    let html = "Original: " + entrada + "<br>";
    html += "Invertido: " + res;
    
    document.getElementById("resultado5").innerHTML = html;
});

function Moneda(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
}

Moneda.prototype.convertir = function(cantidad, otraMoneda) {
    let enDolares = cantidad / this.valor;
    return enDolares * otraMoneda.valor;
};

Moneda.prototype.mostrar = function() {
    return this.nombre + " (1 = $" + this.valor + " USD)";
};

document.getElementById("btn6").addEventListener("click", function() {
    const peso = new Moneda("Peso", 17);
    const dolar = new Moneda("Dolar", 1);
    
    const cantidad = prompt("Cuantos pesos tienes?");
    if (cantidad === null) return;
    
    const dolares = peso.convertir(cantidad, dolar);
    
    let html = "Tienes: " + cantidad + " " + peso.mostrar() + "<br>";
    html += "Equivale a: $" + dolares.toFixed(2) + " USD";
    
    document.getElementById("resultado6").innerHTML = html;
});