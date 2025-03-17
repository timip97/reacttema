import { createContext, useReducer } from "react";
import favoritesReducer from "./reducer";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(favoritesReducer, { favorites: [] });

	return (
		<FavoritesContext.Provider value={{ state, dispatch }}>
			{children}
		</FavoritesContext.Provider>
	);
};
