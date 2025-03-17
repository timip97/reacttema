import React, {useContext} from 'react';
import { FavoritesContext } from '../store/Favorites/context'; // Importă contextul
import { removeFromFavorites } from '../store/Favorites/actions'; // Importă acțiunea de ștergere
import { Button } from 'react-bootstrap';

const Favorites = () => {
  const { state, dispatch } = useContext(FavoritesContext); // Extragem state și dispatch din context

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id)); // Declanșăm acțiunea de ștergere
  };
  console.log(state.favorites)

  return (
    <div>
      <h1>Produse Favorite</h1>
      {state.favorites.length === 0 ? (
        <p>Nu ai niciun produs favorit.</p>
      ) : (
        <ul>
          {state.favorites.map((product) => (
            <li key={product.dealID}>
              {product.title} 
              {/* Adăugăm butonul de ștergere pentru fiecare produs */}
              <Button variant='danger' onClick={() => handleRemoveFromFavorites(product.dealID)}>
                Șterge din favorite
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;