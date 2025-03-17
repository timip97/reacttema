import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actions';

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:{
      // Pentru adaugarea la favorite, cautam produsul in lista existenta.
      const foundProduct = state.favorites.find((product) => {
        return product.dealID === action.payload.dealID;
      });
      // Daca avem deja produsul in lista de favorite, returnam lista, nemodificata.
      if (foundProduct) {
        return state;
        // Daca nu avem produsul in lista, il adaugam.
      } else {
        return {
          favorites: [...state.favorites, action.payload]
        };
      }
    }
      
    case REMOVE_FROM_FAVORITES:{
      // Pentru a sterge un produs din lista de favorite, filtram lista, excluzand produsul cu id-ul egal cu cel primit ca payload.
      const filteredProducts = state.favorites.filter((product) => {
        return product.dealID !== action.payload;
      });
      return {
        favorites: filteredProducts
      };
    }
      
    default:
      return state;
  }
};

export default favoritesReducer;