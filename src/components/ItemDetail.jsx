import React, { useContext, useState } from 'react';
import ItemCounter from './ItemCounter';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'; // Importar componentes de React Bootstrap

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [purchase, setPurchase] = useState(false);

  const onAdd = (quantity) => {
    addToCart(product, quantity);
    setPurchase(true);
  };

  return (
    <Container className="text-center my-4">
      <Row>
        <Col>
          <h1>Detalle del producto: {product.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Imagen del producto más pequeña y responsiva */}
          <Image 
            src={product.img} 
            alt={product.name} 
            fluid 
            style={{ maxWidth: '300px', height: 'auto' }} 
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{product.description}</p>
          <p>Stock: {product.stock} unidades</p>
          <p>Precio: ${product.price},00</p>
        </Col>
      </Row>
      <Row>
        <Col>
          {purchase ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '2rem',
              }}
            >
              <Link className="btn btn-dark" to="/">
                Seguir comprando
              </Link>
              <Link className="btn btn-dark" to="/cart">
                Ir al carrito
              </Link>
            </div>
          ) : (
            <ItemCounter stock={product.stock} onAdd={onAdd} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
