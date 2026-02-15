import './AddProduct.css';
import axios from '../../Utils/axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Addproduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    thcPercentage: '',
    cbdPercentage: '',
    image: '',
  });
  const { id } = useParams();
  const onChange = (e, key) => {
    setProduct({ ...product, [key]: e.target.value });
  };
  const onAddProduct = async () => {
    try {
      const response = await axios.post('/product', product);
      toast.success('New Product added successfully');
      navigate('/');
    } catch (e) {
      toast.error(e.message);
    }
  };
  const handleImage = async e => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    const response = await axios.post('/upload', formData);
    setProduct({ ...product, image: response?.data?.url });
  };
  const getProductById = async id => {
    const response = await axios.get(`/product/${id}`);
    setProduct(response.data.data);
  };
  const onEdit = async () => {
    const response = await axios.patch(`/product/${id}`, product);
    navigate('/');
  };
  useEffect(() => {
    if (id) getProductById(id);
  }, [id]);
  return (
    <>
      <div className="add-product">
        <div className="add-product-form">
          {<h1>{id ? 'EDIT PRODUCT' : 'ADD NEW PRODUCT'}</h1>}
          <div className="form-inputs">
            <div className="form-input-container">
              <label htmlFor="">Name</label>
              <input
                type="text"
                value={product.name}
                onChange={e => {
                  onChange(e, 'name');
                }}
              />
            </div>
            <div className="form-input-container">
              <label htmlFor="">Description</label>
              <textarea
                type="text"
                value={product.description}
                onChange={e => {
                  onChange(e, 'description');
                }}
              />
            </div>
            <div className="form-input-container">
              <label htmlFor="">Price</label>
              <input
                type="text"
                value={product.price}
                placeholder="number value only"
                onChange={e => {
                  onChange(e, 'price');
                }}
              />
            </div>
            <div className="form-input-container">
              <label htmlFor="">Category</label>
              <select
                value={product.category}
                onChange={e => {
                  onChange(e, 'category');
                }}
              >
                <option value="">Select Category</option>
                <option value="Flower">Flower</option>
                <option value="Edibles">Edibles</option>
                <option value="Oils">Oils</option>
              </select>
            </div>

            <div className="form-input-container">
              <label htmlFor="">thcPercentage</label>
              <input
                type="text"
                value={product.thcPercentage}
                placeholder="0 to 100"
                onChange={e => {
                  onChange(e, 'thcPercentage');
                }}
              />
            </div>
            <div className="form-input-container">
              <label htmlFor="">cbdPercentage</label>
              <input
                type="text"
                value={product.cbdPercentage}
                placeholder="0 to 100"
                onChange={e => {
                  onChange(e, 'cbdPercentage');
                }}
              />
            </div>
            <div className="form-input-container">
              <label htmlFor="">Image</label>
              <input type="file" onChange={handleImage} />
            </div>
            <button onClick={id ? onEdit : onAddProduct}>
              {id ? 'UPDATE' : 'ADD'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
