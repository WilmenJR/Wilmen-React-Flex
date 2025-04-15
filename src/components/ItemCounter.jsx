import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'; // Importamos componentes de react-bootstrap

const ItemCounter = ({ stock, onAdd, productName, imageUrl }) => {
  const [count, setCount] = useState(1);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Container className="text-center">
      <Row>
        <Col>
          {/* Imagen más pequeña */}
          <Image src={imageUrl} alt={productName} style={{ width: '150px', height: 'auto' }} />
          <h3>{productName}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <Button className="btn btn-danger" onClick={subtract}>-</Button>
            <span className="btn">{count}</span>
            <Button className="btn btn-danger" onClick={add}>+</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button 
            className="btn btn-primary" 
            disabled={stock === 0 || count === 0} 
            onClick={() => onAdd(count)}
          >
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCounter;
