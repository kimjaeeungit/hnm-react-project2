import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {}, []);
  getProductDetail();
  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img} />
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
