const productos = [
    { nombre: "Jersey Oficial Chivas 2024", precio: 899, qtyInputId: "qty1", helpId: "help1" },
    { nombre: "Gorro Chivas", precio: 299, qtyInputId: "qty2", helpId: "help2" },
    { nombre: "Balón Oficial Chivas", precio: 799, qtyInputId: "qty3", helpId: "help3" }
];

document.getElementById("qty1").addEventListener("mouseover", function() {
    document.getElementById("help1").classList.add("show");
});
document.getElementById("qty1").addEventListener("mouseout", function() {
    document.getElementById("help1").classList.remove("show");
});

document.getElementById("qty2").addEventListener("mouseover", function() {
    document.getElementById("help2").classList.add("show");
});
document.getElementById("qty2").addEventListener("mouseout", function() {
    document.getElementById("help2").classList.remove("show");
});

document.getElementById("qty3").addEventListener("mouseover", function() {
    document.getElementById("help3").classList.add("show");
});
document.getElementById("qty3").addEventListener("mouseout", function() {
    document.getElementById("help3").classList.remove("show");
});

function calcularTotal() {
    let subtotal = 0;
    let errores = false;
    
    const qty1 = parseInt(document.getElementById("qty1").value) || 0;
    const qty2 = parseInt(document.getElementById("qty2").value) || 0;
    const qty3 = parseInt(document.getElementById("qty3").value) || 0;
    
    if (qty1 < 1 || qty1 > 30) {
        alert("Jersey: cantidad inválida (1-30)");
        errores = true;
    }
    if (qty2 < 1 || qty2 > 50) {
        alert("Gorro: cantidad inválida (1-50)");
        errores = true;
    }
    if (qty3 < 1 || qty3 > 20) {
        alert("Balón: cantidad inválida (1-20)");
        errores = true;
    }
    
    if (errores) return;
    
    subtotal = (productos[0].precio * qty1) + (productos[1].precio * qty2) + (productos[2].precio * qty3);
    
    const iva = subtotal * 0.16;
    const total = subtotal + iva;
    
    document.getElementById("subtotal").textContent = "$" + subtotal.toLocaleString('es-MX');
    document.getElementById("iva").textContent = "$" + iva.toLocaleString('es-MX', {maximumFractionDigits: 2});
    document.getElementById("total").textContent = "$" + total.toLocaleString('es-MX', {maximumFractionDigits: 2});
}

function comprar() {
    const qty1 = parseInt(document.getElementById("qty1").value) || 0;
    const qty2 = parseInt(document.getElementById("qty2").value) || 0;
    const qty3 = parseInt(document.getElementById("qty3").value) || 0;
    
    if (qty1 < 1 || qty1 > 30 || qty2 < 1 || qty2 > 50 || qty3 < 1 || qty3 > 20) {
        alert("Las cantidades están fuera del rango permitido");
        return;
    }
    
    alert("¡VAMOS CHIVAS! Tu compra ha sido realizada exitosamente. 🔴⚪");
    calcularTotal();
}

calcularTotal();