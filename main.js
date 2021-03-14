window.onload = function () {
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Medialuna',
            precio: 45,
        },
        {
            id: 2,
            nombre: 'Cafe',
            precio: 100,
        }
    ];
    
    const $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    const $carrito = document.querySelector('#carrito');
    const $total = document.querySelector('#total');

    // Funciones
    function renderItems() {
        for (let info of baseDeDatos) {
            // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            let miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info['nombre'];
            // Precio
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = info['precio'] + '$';
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }

    function anyadirCarrito () {
        carrito.push(this.getAttribute('marcador'))
        calcularTotal();
    }

    function calcularTotal() {
        total = 0;
        for (let item of carrito) {
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        $total.textContent = total
    }
    renderItems();
} 
