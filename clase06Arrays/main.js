class productos{
	constructor(nombre, categoria, precio, disponibilidad){
		this.nombre=nombre
		this.categoria=categoria
		this.precio=precio
		this.disponibilidad=disponibilidad
	}

	agregar(){
		let error = "Producto disponible"
		if(this.disponibilidad == false){
			this.disponibilidad = true
		}else{
			console.log(error)
		}
	}	

	eliminar(){
		let fallo = "No es posible eliminar el producto, el mismo no se encuentra disponible"
		if(this.disponibilidad == true){
			this.disponibilidad = false
		}else{
			console.log(fallo)
		}
	}
}
const carrito= []

let producto1 = new productos("VINO ESTANCIA MENDOZA MALBEC ROBLE 750ml","VINOS",749,true)
let producto2 = new productos("ESPUMANTE ESTANCIA MENDOZA EXTRA BRUT","VINOS",649,false)
let producto3 = new productos("VINO ESTANCIA MENDOZA MERLOT ROBLE 750ml","VINOS",759,true)
let producto4 = new productos("VINO ESTANCIA MENDOZA SAUVIGNON BLANC ROBLE 750ml","VINOS",749,true)
let producto5 = new productos("ESPUMANTE 2020 LPQTP CHARMAT LUNGO 750ML","VINOS",809,false)
let producto6 = new productos("VINO DANTE ROBINO MALBEC 750ml","VINOS",789,true)

carrito.push(producto1,producto2,producto3,producto4,producto5,producto6)

function agregarProducto(){
	let nombreProductoNuevo = prompt("Ingrese el NOMBRE del producto")
	let categoriaNueva = prompt ("Ingrese la CATEGORIA del producto")
	let precioNuevo = Number(prompt("Ingrese el PRECIO del producto"))
	let disponibilidadNueva = confirm("Posee STOCK del producto?")

	let productoNuevo = new productos (nombreProductoNuevo, categoriaNueva, precioNuevo, disponibilidadNueva)

	carrito.push(productoNuevo)
	console.log(carrito)
}

let cargarProducto = prompt("Quiere agregar un producto?").tolocaluppercase()

while(cargarProducto = "SI"){
 	agregarProducto()
 	cargarProducto = prompt("Agregas otro producto?").tolocaluppercase()
 }
 




