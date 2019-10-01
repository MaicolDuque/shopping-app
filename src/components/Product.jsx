import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const {
    _id,
    price,
    name,
    image,
    description,
    availableQuantity,
  } = props;

  return (
    <div className="card h-100">
      <Link to={`/product/${_id}`}>
        <img className="card-img-top" src={image} alt={name} />
      </Link>
      <div className="card-body">
        <h4 className="card-title">
          <Link to={`/product/${_id}`}>{name}</Link>
        </h4>
        <h5>${price}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  );
};

export default Product;
