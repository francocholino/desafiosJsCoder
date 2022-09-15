const Products =[

	{
		id:'01',
		name: 'VINO ESTANCIA MENDOZA MALBEC ROBLE 750ml',
		description: 'vino estancia mendoza malbec roble 750ml',
		price: '749',
		category: 'VINOS',
		image: 'images/vinos/e-mdz/malbec-roble-1.webp',
	},

	{
		id:'02',
		name: 'ESPUMANTE ESTANCIA MENDOZA EXTRA BRUT',
		description: 'espumante estancia mendoza extra brut 750ml',
		price: '649',
		category: 'VINOS',
		image: 'images/vinos/e-mdz/e-brut-mdz-1.webp',
	},

	{
		id:'03',
		name: 'VINO ESTANCIA MENDOZA MERLOT ROBLE 750ml',
		description: 'vino estancia mendoza merlot roble 750ml',
		price: '759',
		category: 'VINOS',
		image: 'images/vinos/e-mdz/merlot-roble-1.webp',
	},

	{
		id:'04',
		name: 'VINO ESTANCIA MENDOZA SAUVIGNON BLANC ROBLE 750ml',
		description: 'vino estancia mendoza sauvignon blanco roble 750ml',
		price: '749',
		category: 'VINOS',
		image: 'images/vinos/e-mdz/sauvignon-blanc-1.webp',
	},

	{
		id:'05',
		name: 'ESPUMANTE 2020 LPQTP CHARMAT LUNGO 750ML',
		description: 'espumante 2020 dante robino lpqtp charmat lungo 750ml',
		price: '809',
		category: 'VINOS',
		image: 'images/vinos/dante-robino/espumante-lpqtp-1.webp',
	},

	{
		id:'06',
		name: 'VINO DANTE ROBINO MALBEC 750ml',
		description: 'vino dante robino malbec 750ml',
		price: '789',
		category: 'VINOS',
		image: 'images/vinos/dante-robino/malbec-robino-1.webp',
	},
]

const cart = [];

const updateCart = (cart) =>
{
	let cartContainer = document.querySelector('#cart');

	let container = document.querySelector('#cartContainer');
	if(container){
		container.parentNode.removeChild(container);
	}

	let div = document.createElement('div');
	div.setAttribute('id', 'cartContainer');
	div.innerHTML += '<h2>Carrito de Compras</h2>';
	for (const product of cart)
	{
		div.innerHTML+=`
			<div class="cart-item">
				<h4>Producto: ${product.name} </h4>
				<h4>Precio: ${product.price}</h4>
			</div>
		`;
	}
	cartContainer.appendChild(div);
}

const loadEvents = () =>
{
	let buttons = document.querySelectorAll('.button');
	for (const button of buttons)
		{

			button.addEventListener('click', ()=> {

				let prod = cart.find(product => product.id == button.id);
				if(prod)
				{
					prod.quantity++;
				}else{
					let prod = Products.find(product => product.id == button.id);
					if(prod){
						let newProduct = {
							id: prod.id,
							name: prod.name,
							description: prod.description,
							price: prod.price,
							category: prod.category,
							image: prod.image,
							quantity: 1
						}
						cart.push(newProduct);
					}
					
				}
				updateCart(cart);
		})
	}
}

const loadProducts = (Products) =>
{
	let container = document.querySelector('#container');
	for (const product of Products)
	{
		let div = document.createElement('div');
		div.setAttribute('class', 'card');

		div.innerHTML = `
		<img class="producto" src="${product.image}" alt="${product.description}">
		<h3>${product.name}</h3>
		<h4>$${product.price}</h4>
		<h5>${product.category}</h5>
		<h6>${product.id}</h6>
		<button class="button" id="${product.description}">Agregar al carrito</button>
		`;
		container.appendChild(div);
	}
	//carga de eventos-- addEventListener
	loadEvents();
}

loadProducts(Products);
