import { addDoc, serverTimestamp, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { db } from '../service/firebase';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'; // Bootstrap

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [orderId, setOrderId] = useState('');
  const [validateMail, setValidateMail] = useState('');
  const { cart, cartTotal, clear } = useCart();

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.lastname || !buyer.email || !buyer.address) {
      alert('Todos los campos son obligatorios');
    } else if (buyer.email !== validateMail) {
      alert('Los mails no coinciden');
    } else {
      const order = {
        comprador: buyer,
        compras: cart,
        total: cartTotal(),
        date: serverTimestamp(),
      };

      const ventas = collection(db, 'orders');
      addDoc(ventas, order)
        .then((res) => {
          cart.forEach((item) => {
            const docRef = doc(db, 'Celulares', item.id);
            getDoc(docRef)
              .then((dbDoc) => {
                updateDoc(docRef, {
                  stock: dbDoc.data().stock - item.quantity,
                });
              })
              .catch((error) => console.log(error));
          });
          setOrderId(res.id);
          clear();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container className="my-5">
      {orderId ? (
        <Alert variant="success" className="text-center">
          <h2>¡Compra realizada con éxito!</h2>
          <h5>Tu ID de orden es: <strong>{orderId}</strong></h5>
        </Alert>
      ) : (
        <>
          <h2 className="text-center mb-4">Completa tus datos</h2>
          <Form onSubmit={finalizarCompra}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Ingrese su nombre" onChange={buyerData} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" name="lastname" placeholder="Ingrese su apellido" onChange={buyerData} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" name="address" placeholder="Ingrese su dirección" onChange={buyerData} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Ingrese su correo" onChange={buyerData} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Repetir correo</Form.Label>
                  <Form.Control type="email" placeholder="Repita su correo" onChange={(e) => setValidateMail(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center">
              <Button type="submit" variant="success" className="px-5 mt-3">
                Finalizar compra
              </Button>
            </div>
          </Form>
        </>
      )}
    </Container>
  );
};

export default Checkout;
