import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Product from '../components/Product';

const API = 'https://shopping-cart-api.maicolduque.now.sh/api/product';

const getProducts = async(setProducts) => {
  try {
    const result = await fetch(API);
    const products = await result.json();
    setProducts(products);
  } catch (error) {
    console.error('Error :(', error);
  }
}

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(setProducts)
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          {
            products.map((product, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 mb-4">
                <Product  {...product} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
export default Home;