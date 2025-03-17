import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { addToCart } from "../store/Cart/actions";
import { CartContext } from '../store/Cart/context';

export function Products() {
  // Luam produse de la API si actualizam state-ul.
  const [products, setProducts] = useState([]);
  const {cartDispatch} = useContext(CartContext);
  useEffect(() => {
    fetch('https://www.cheapshark.com/api/1.0/deals')
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  const handleAddToCart = (product) => {
		const actionResult = addToCart(product);
		// Trimitem rezultatul actiunii catre reducer (care ne permite sa modificam state-ul)
		cartDispatch(actionResult);
	};

  return (
    <div className="d-flex flex-column align-items-center">
      {/* Afisam produsele pe ecran, sub forma de carduri de Bootstrap. */}
      {products.map((product) => {
        return (
          <Card key={product.dealID} style={{ width: '18rem' }} className="m-3">
            {/* Fiecare card are link-ul corespunzator catre pagina de produs. */}
            {/* Functia encodeURI transforma caracterele care nu sunt acceptate in url */}
            <Link
              to={`/product/${encodeURI(product.dealID)}`}
              className="text-dark"
            >
              <Card.Img variant="top" src={product.thumb} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="text-danger">
                  {product.salePrice} $
                </Card.Text>
              </Card.Body>
            </Link>
            <Button
								variant="success"
								onClick={() => {
									// Construim payload-ul si il pasam ca argument catre o functie ce va modifica state-ul pt cart
									handleAddToCart({
										id: product.dealID,
										image: product.thumb,
										name: product.title,
										price: product.salePrice,
									});
								}}
							>
								Adaugă în coș
							</Button>
          </Card>
        );
      })}
    </div>
  );
}
