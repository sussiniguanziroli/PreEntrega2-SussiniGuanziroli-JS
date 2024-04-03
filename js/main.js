// objeto que representa un producto de pesca
function Producto(nombre, tipo, precio) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
}

// mostrar un mensaje de bienvenida y solicitar el nombre del usuario
function darBienvenida() {
    let nombreUsuario = prompt("¡Bienvenido al Pescado Fish, Tienda de Equipamiento de Pesca! Por favor, ingrese su nombre:");
    console.log("Hola " + nombreUsuario + "! Bienvenido a nuestro marketplace de equipamiento de pesca.");
    return nombreUsuario;
}

// mostrar el menú de productos y permitir al usuario elegir los productos a agregar al carrito
function mostrarMenuProductos() {
    let carrito = [];

    const productos = [
        new Producto("Caña de pescar", "Caña", 50),
        new Producto("Carrete de pesca", "Carrete", 30),
        new Producto("Señuelo de pesca", "Señuelo", 5),
        new Producto("Red de pesca", "Red", 20)
    ];

    productos.forEach((producto, index) => {
        console.log((index + 1) + ". " + producto.nombre + " - Tipo: " + producto.tipo + ", Precio: $" + producto.precio);
    });

    while (true) {
        let opcion = parseInt(prompt("Ingrese el número del producto que desea agregar al carrito (o ingrese '0' para finalizar la compra):"));
        if (opcion === 0) {
            break;
        } else if (opcion >= 1 && opcion <= productos.length) {
            let productoElegido = productos[opcion - 1];
            carrito.push({ nombre: productoElegido.nombre, tipo: productoElegido.tipo, precio: productoElegido.precio });
            console.log("¡Ha agregado \"" + productoElegido.nombre + "\" al carrito!");
        } else {
            console.log("Opción inválida. Por favor, ingrese un número válido.");
        }
    }

    return carrito;
}

// obtener la dirección de envío del usuario
function obtenerDireccionEnvio() {
    let pais = prompt("Por favor, ingrese su país:");
    let ciudad = prompt("Por favor, ingrese su ciudad:");
    console.log("Dirección de envío: " + ciudad + ", " + pais);
    return { pais, ciudad };
}

// solicitar el correo electrónico del usuario
function solicitarCorreoUsuario() {
    let correoUsuario = prompt("Por favor, ingrese su correo electrónico para enviar el comprobante de compra:");
    return correoUsuario;
}

// solicitar confirmación al usuario antes de proceder con el pago
function confirmarPago(totalConEnvio) {
    let confirmacion = confirm("El total a pagar, incluido el costo de envío, es $" + totalConEnvio + ". ¿Desea continuar con el pago?");
    return confirmacion;
}

// simular el proceso de cobro y obtener el total con envío
function realizarCobro(total) {
    let confirmacion = confirmarPago(total);
    if (confirmacion) {
        let correoUsuario = solicitarCorreoUsuario();
        let tarjetaCredito = prompt("Por favor, ingrese el número de su tarjeta de crédito o débito:");
        
        console.log("Procesando el pago...");
        

        // proceso de validación de tarjeta
        setTimeout(() => {
            console.log("El pago se ha realizado con éxito. Total: $" + total + ".");
            console.log("Se ha enviado un comprobante de compra a " + correoUsuario + " correo electrónico proporcionado.");
            return correoUsuario; 
        }, 2000); // timeout fake para hacer la experiencia mas natural
        
    } else {
        console.log("El usuario ha cancelado el pago. La compra no se ha completado.");
    }
}

// funcion principal que ejecuta el proceso de compra completo
function iniciarCompra() {
    let nombreUsuario = darBienvenida();
    let carrito = mostrarMenuProductos();
    let direccionEnvio = obtenerDireccionEnvio();
    let totalProductos = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    let costoEnvio = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // numero aleatorio entre 10 y 20
    let totalConEnvio = totalProductos + costoEnvio;
    let correoUsuario = realizarCobro(totalConEnvio);  
}

// iniciar el proceso de compra
iniciarCompra();
