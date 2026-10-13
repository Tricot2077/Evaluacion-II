
const productos = [
    { id: 1, nombre: "Teclado Mecánico", tipo: "Hardware", precio: 40000, stock: 5 },
    { id: 2, nombre: "Mouse Gamer", tipo: "Hardware", precio: 20000, stock: 0 },
    { id: 3, nombre: "Audífonos", tipo: "Audio", precio: 30000, stock: 3 },
    { id: 4, nombre: "Monitor 24\"", tipo: "Pantalla", precio: 120000, stock: 2 },
    { id: 5, nombre: "Alfombrilla", tipo: "Accesorios", precio: 8000, stock: 10 }
];


function mostrarProductos(lista) {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    
    lista.forEach(p => {
        
        let etiquetaStock = p.stock > 0 
            ? `<span class="badge bg-success">Stock: ${p.stock}</span>` 
            : `<span class="badge bg-danger">Agotado</span>`;

        
        contenedor.innerHTML += `
            <div class="col-md-4">
                <div class="card p-3 shadow-sm h-100">
                    <h5 class="fw-bold">${p.nombre}</h5>
                    <p class="text-muted mb-1">Tipo: ${p.tipo}</p>
                    <p class="mb-2">Precio: $${p.precio}</p>
                    <div>${etiquetaStock}</div>
                </div>
            </div>
        `;
    });
}


function filtrar() {
    const texto = document.getElementById("inputBuscar").value.toLowerCase();
    
    const resultado = productos.filter(p => p.nombre.toLowerCase().includes(texto));
    mostrarProductos(resultado);
}


function reiniciar() {
    document.getElementById("inputBuscar").value = "";
    mostrarProductos(productos);
}


document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productos); 

    document.getElementById("btnBuscar").addEventListener("click", filtrar);
    document.getElementById("btnReset").addEventListener("click", reiniciar);
});