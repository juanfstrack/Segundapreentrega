import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
function App() {
	const itemCount = 1;
	return (
		<div>
			<NavBar />
			<CartWidget itemCount={itemCount}/>
			<ItemListContainer greeting={'Hola, mundo'}/>
			<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada' ,quantity)} />
		</div>
	);
}

export default App;
