export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

// Acțiune pentru adăugarea unui produs la favorite
export const addToFavorites = (product) => ({
    type: ADD_TO_FAVORITES,
    payload: product
});

// Acțiune pentru ștergerea unui produs din favorite
export const removeFromFavorites = (id) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: id
});