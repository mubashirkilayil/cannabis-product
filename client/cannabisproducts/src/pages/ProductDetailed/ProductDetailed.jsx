import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailed.css';
import axios from '../../Utils/axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProductDetailed = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const onProductDetails = async () => {
    try {
      const response = await axios.get(`/product/${id}`);
      setProduct(response.data.data);
    } catch (e) {
      console.log('Error fetching product', e.message);
    }
  };
  useEffect(() => {
    onProductDetails();
  }, [id]);
  console.log(product);
  const onEdit = id => {
    navigate(`/edit-product/${id}`);
  };
  const onDelete = async id => {
    try {
      const deleteItem = await axios.delete(`/product/${id}`);
      toast.success('Item deleted successfully');
      setTimeout(() => {
        navigate('/');
      }, 500);
    } catch (e) {
      toast.error(e.message);
    }
  };
  const onAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Product added to cart');
  };

  return (
    <>
      <div className="product-details-page">
        <div className="btn">
          <button
            className="edit-btn"
            onClick={() => {
              onEdit(id);
            }}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </div>
        <div className="details">
          <div className="product-image">
            <img src={product.image} alt="..." />
          </div>
          <div className="product-details">
            <h1>{product.name}</h1>
            <p>
              <span className="price-icon">$</span>{product.price}
            </p>
            {/* <p>{product.Stock}&nbsp;in&nbsp;stock</p> */}
            <p>{product.category}</p>
            <p>{product.description}</p>
            <div className="btn-group">
              <button className="btn-add-cart" onClick={onAddToCart}>
                Add to cart
              </button>
              <button className="btn-wishlist">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailed;
