const products = [
	{
		id: 1,
		name: "Remera XL",
		price: 5000,
		category: "remerón",
		img: "https://galponderopaar.vtexassets.com/arquivos/ids/181612/LH0262180423--1-.jpg?v=638180407374670000",
		stock: 5,
		descrition: "Descripccion",
	},
	{
		id: 2,
		name: "Remera L",
		price: 2000,
		category: "remera",
		img: "https://www.yomerenuevo.com/productos/remera-hombre-ekio-talle-l/",
		stock: 5,
		descrition: "Descripccion",
	},
	{
		id: 3,
		name: "Remera M",
		price: 3000,
		category: "remeraCh",
		img: "https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2022/2_25/0/111/135/7309136.jpg",
		stock: 5,
		descrition: "Descripccion",
	},
];

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 500);
	});
};

export const getProductsById = (productId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.find((prod) => prod.id === productId));
		}, 500);
	});
};
