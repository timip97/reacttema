import React, { useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import {
	themeReducer,
	intialState as themeInitalState,
} from "./store/Theme/reducer";
import { ThemeContext } from "./store/Theme/context";
import { FavoritesProvider } from "./store/Favorites/context"; // Importă FavoritesProvider
import {
	initialState as cartInitialState,
	cartReducer,
} from "./store/Cart/reducer";
import { CartContext } from "./store/Cart/context";

// Setează rutele pentru aplicație
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<Home />
			</>
		),
	},
	{
		path: "/products",
		element: (
			<>
				<Header />
				<Products />
			</>
		),
	},
	{
		path: "/product/:id",
		element: (
			<>
				<Header />
				<Product />
			</>
		),
	},
	{
		path: "/cart",
		element: (
			<>
				<Header />
				<Cart />
			</>
		),
	},
	{
		path: "/favorites",
		element: (
			<>
				<Header />
				<Favorites />
			</>
		),
	},
]);

export default function App() {
	// Reducer pentru tema aplicației
	const [themeState, themeDispatch] = useReducer(
		themeReducer,
		themeInitalState
	);
	const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
	// Contextul pentru tema aplicației
	const themeContextValue = {
		themeState,
		themeDispatch,
	};

	return (
		<FavoritesProvider>
			<CartContext.Provider value={{ cartState, cartDispatch }}>
				{/* Contextul pentru favorite */}
				<ThemeContext.Provider value={themeContextValue}>
					<div className="App primary">
						<RouterProvider router={router} /> {/* Rutele aplicației */}
					</div>
				</ThemeContext.Provider>
			</CartContext.Provider>
		</FavoritesProvider>
	);
}
