const products = [
	{
		id: 1,
		name: "Remera XL",
		price: 5000,
		img: "https://galponderopaar.vtexassets.com/arquivos/ids/181612/LH0262180423--1-.jpg?v=638180407374670000",
		stock: 5,
		descrition: "Descripccion",
	},
	{
		id: 2,
		name: "Remera L",
		price: 2000,
		img: "https://www.yomerenuevo.com/productos/remera-hombre-ekio-talle-l/",
		stock: 5,
		descrition: "Descripccion",
	},
	{
		id: 3,
		name: "Remera M",
		price: 3000,
		img: "https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2022/2_25/0/111/135/7309136.jpg",
		stock: 5,
		descrition: "Descripccion",
	},
];

export const getProducts = () => {
	return new promise((resolve) => {
		setTimeout(() => {
			resolve(products)
		}, 5000)
	});
};
