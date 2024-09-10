
function agregarProducto(id,cantidadAgregar){
    const index = CARRITO.findIndex(item => item.id === id);
    
    CARRITO[index].cantidad += cantidadAgregar
    console.log(`se agregaron ${cantidadAgregar+' '}${CARRITO[index].nombre} al carrito`)
}
function removerProducto(id){
    const index=CARRITO.findIndex(item => item.id===id)
    CARRITO[index].cantidad = 0
    console.log(`se eliminó ${CARRITO[index].nombre} del carrito`)
}
function totalCarrito(){
    total=0
    for (let i=0;i<CARRITO.length;i++){
        let subTotal= CARRITO[i].precio*CARRITO[i].cantidad
        total+= subTotal
    }
    return total
}
function listarProductos(){
    nuevaLista=[]
    for(let i = 0;i<CARRITO.length;i++)
        if(CARRITO[i].cantidad!==0){
            nuevaLista.push(CARRITO[i])
        }
    if(nuevaLista.length===0){
        console.log('el carrito esta vacío')
    }
    else{
        console.log(nuevaLista)
    }
}
CARRITO=[
    {id:1, nombre:'Leche', precio:100, cantidad:1},
    {id:2, nombre:'Pan', precio:200, cantidad:1},
    {id:3, nombre:'Huevos', precio:300, cantidad:1},
    {id:4, nombre:'Arroz', precio:150, cantidad:1},
    {id:5, nombre:'Azúcar', precio:250, cantidad:1},
    {id:6, nombre:'Café', precio:350, cantidad:1},
    {id:7, nombre:'Aceite', precio:200, cantidad:1},
    {id:8, nombre:'Sal', precio:50, cantidad:1},
    {id:9, nombre:'Pasta', precio:180, cantidad:1},
    {id:10, nombre:'Tomate', precio:120, cantidad:1}
];
CARRITO.map( item => {item.cantidad = 0
});

agregarProducto(3,5)
agregarProducto(1,1)
listarProductos()
console.log(totalCarrito())
