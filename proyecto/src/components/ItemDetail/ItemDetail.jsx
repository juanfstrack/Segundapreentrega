import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, category, description, price, stock }) => {
	return (
		<article>
			<header>
				<h2>{name}</h2>
			</header>
			<picture>
				<img src={img} alt={name} />
			</picture>
			<section>
				<p>Categoría : {category}</p>
				<p>Descripción {description} </p>
				<p>Precio: ${price} </p>
			</section>
			<footer>
				<ItemCount
					initial={1}
					stock={10}
					onAdd={(quantity) =>
						console.log("cantidad agregada", quantity)
					}
				/>
			</footer>
		</article>
	);
};

export default ItemDetail;
