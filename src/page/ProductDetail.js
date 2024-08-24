import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/kimjaeeungit/react-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
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
            <div>{product?.choice == true ? 'Conscious choice' : ''}</div>
            <Form.Select size="sm">
              <option>사이즈 선택</option>
              <option value="1">S</option>
              <option value="2">M</option>
              <option value="3">L</option>
            </Form.Select>
            <Button variant="dark">추가</Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
