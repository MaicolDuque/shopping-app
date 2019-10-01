import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Product from '../components/Product';

const Detail = (props) => {
  const product = {}
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