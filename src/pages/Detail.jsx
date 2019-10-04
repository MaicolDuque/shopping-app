import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Product from '../components/Product';

const API = 'https://shopping-cart-api.maicolduque.now.sh/api/product';
const getProduct = async(id, setProduct) => {
  try {;
    const result = await fetch(`${API}/${id}`)
    const product = await result.json();
    setProduct(product);
  } catch (error) {
    console.error('Error :(', error);
  }
};

const Detail = (props) => {
  
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const { match: { params } } = props;
    const { id } = params;
    getProduct(id, setProduct)
  }, [props]);
  
  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12">
            <Product {...product} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;