const btnGuardar = document.querySelector("#btn-guardar");

const producto = document.querySelector("#produto");
const stock = document.querySelector("#stock");
const categoria = document.querySelector("#categoria");
const valor = document.querySelector("#valor");
const proveedor = document.querySelector("#proveedor");

const tablaProductos = document.querySelector("#tabla-productos");


btnGuardar.addEventListener("click", function(evento) {

    evento.preventDefault();

    const nombreProducto = producto.value;
    const cantidadStock = stock.value;
    const inputCategoria = categoria.value;
    const valorUnitario = valor.value;
    const nombreProveedor = proveedor.value;

    // Verificar que no estén vacíos
    if (
        nombreProducto === "" ||
        cantidadStock === "" ||
        inputCategoria === "" ||
        valorUnitario === "" ||
        nombreProveedor === ""
    ) {
        alert("Completa todos los campos");
        return;
    }

    // Crear fila
    const fila = document.createElement("tr");

    fila.classList.add("filas");

    fila.innerHTML = `
        <td>${nombreProducto}</td>
        <td>${cantidadStock}</td>
        <td>${inputCategoria}</td>
        <td>$ ${valorUnitario}</td>
        <td>${nombreProveedor}</td>
        <td>
            <button class="btn-editar">
                <i class="fi fi-sr-pencil"></i>
            </button>

            <button class="btn-eliminar">
                <i class="fi fi-sr-trash"></i>
            </button>
        </td>
    `;

    // Agregar fila
    tablaProductos.appendChild(fila);

    // Limpiar formulario
    producto.value = "";
    stock.value = "";
    inputCategoria.value = "";
    valor.value = "";
    proveedor.value = "";
});