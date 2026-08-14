// ========================================
// ELEMENTOS DEL FORMULARIO
// ========================================

const btnGuardar = document.querySelector("#btn-guardar");

const producto = document.querySelector("#producto");
const stock = document.querySelector("#stock");
const categoria = document.querySelector("#categoria");
const valor = document.querySelector("#valor");
const proveedor = document.querySelector("#proveedor");

const tablaProductos = document.querySelector("#tabla-productos");

const mensaje = document.querySelector("#mensaje");


// ========================================
// VARIABLE PARA SABER SI ESTAMOS EDITANDO
// ========================================

// null = no estamos editando
// una fila = estamos editando ese producto

let filaEditando = null;


// ========================================
// FUNCIÓN PARA LIMPIAR FORMULARIO
// ========================================

function limpiarFormulario() {

    producto.value = "";
    stock.value = "";
    categoria.value = "";
    valor.value = "";
    proveedor.value = "";

}


// ========================================
// BOTÓN GUARDAR / ACTUALIZAR
// ========================================

btnGuardar.addEventListener("click", function(evento) {

    evento.preventDefault();

    const nombreProducto = producto.value.trim();
    const cantidadStock = stock.value.trim();
    const inputCategoria = categoria.value.trim();
    const valorUnitario = valor.value.trim();
    const nombreProveedor = proveedor.value.trim();


    // ========================================
    // VALIDAR CAMPOS
    // ========================================

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


    // ========================================
    // SI ESTAMOS EDITANDO
    // ========================================

    if (filaEditando !== null) {

        // Actualizamos las celdas de la fila

        filaEditando.children[0].textContent = nombreProducto;
        filaEditando.children[1].textContent = cantidadStock;
        filaEditando.children[2].textContent = inputCategoria;
        filaEditando.children[3].textContent = "$ " + valorUnitario;
        filaEditando.children[4].textContent = nombreProveedor;


        // Ya terminamos de editar

        filaEditando = null;


        // Cambiar nuevamente el botón

        btnGuardar.textContent = "Guardar Producto";


        // Limpiar formulario

        limpiarFormulario();


        alert("Producto actualizado");

        mensaje.textContent = "Producto actualizado correctamente";
        mensaje.style.display = "block";

        setTimeout(function() {
            mensaje.style.display = "none";
        }, 3000); 

        return;
    }


    // ========================================
    // SI NO ESTAMOS EDITANDO
    // CREAR NUEVO PRODUCTO
    // ========================================

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


    // Agregar la fila a la tabla

    tablaProductos.appendChild(fila);


    // Limpiar formulario

    limpiarFormulario();

    mensaje.textContent = "Producto guardado correctamente";
    mensaje.style.display = "block";

    setTimeout(function() {
        mensaje.style.display = "none";
    }, 3000);   


});


// ========================================
// BUSCADOR DE PRODUCTOS
// ========================================

const inputBusqueda = document.querySelector("#input-busqueda");

inputBusqueda.addEventListener("input", function() {

    const textoBuscado = inputBusqueda.value
        .toLowerCase()
        .trim();


    const filas = tablaProductos.querySelectorAll(".filas");


    filas.forEach(function(fila) {

        const textoFila = fila.textContent.toLowerCase();


        if (textoFila.includes(textoBuscado)) {

            fila.style.display = "";

        } else {

            fila.style.display = "none";

        }

    });

});


// ========================================
// ELIMINAR PRODUCTO
// ========================================

function eliminarProducto(fila) {

    const confirmar = confirm(
        "¿Quieres eliminar este producto?"
    );


    if (confirmar) {

        fila.remove();

    }

}


// ========================================
// BOTONES DE LA TABLA
// ========================================

tablaProductos.addEventListener("click", function(evento) {


    // ====================================
    // ELIMINAR
    // ====================================

    if (evento.target.closest(".btn-eliminar")) {

        const fila = evento.target.closest(".filas");

        eliminarProducto(fila);

        return;
    }


    // ====================================
    // EDITAR
    // ====================================

    if (evento.target.closest(".btn-editar")) {

        const fila = evento.target.closest(".filas");


        // Guardamos qué fila estamos editando

        filaEditando = fila;


        // Pasamos los datos de la fila
        // al formulario

        producto.value =
            fila.children[0].textContent.trim();

        stock.value =
            fila.children[1].textContent.trim();

        categoria.value =
            fila.children[2].textContent.trim();

        valor.value =
            fila.children[3].textContent
                .replace("$", "")
                .trim();

        proveedor.value =
            fila.children[4].textContent.trim();


        // Cambiar texto del botón

        btnGuardar.textContent = "Actualizar Producto";


        // Opcional: llevar el usuario
        // hacia el formulario

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});

// AVISO DE PRODUCTO GUARDADO 

