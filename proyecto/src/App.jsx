import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
	const itemCount = 1;
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route
						path="./category/:categoryId"
						element={<ItemListContainer />}
					/>
					<Route
						path="./item/:itemId"
						element={<ItemDetailContainer />}
					/>
					<Route path="*" element={<h1>404 NOT FOUND</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
