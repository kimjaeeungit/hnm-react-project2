import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/kimjaeeungit/react-hnm/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
