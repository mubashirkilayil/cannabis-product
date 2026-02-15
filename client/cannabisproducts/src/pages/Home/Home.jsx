import './Home.css';
import axios from '../../Utils/axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { Skeleton } from 'antd';

const Home = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setmaxPrice] = useState('');
  const [filterPrice, setFilterPrice] = useState({
    min: '',
    max: '',
  });

  const getProduct = async () => {
    try{
    const response = await axios.get(
      `/product?search=${search}&category=${category}&minPrice=${filterPrice.min}&maxPrice=${filterPrice.max}`
    );
    setProduct(response.data.data);
  }catch{
    setProduct([])
  }

  };
  
  useEffect(() => {
    getProduct();
  }, [search, category, filterPrice]);
  console.log(search);

  const navigate = useNavigate();
  const onProductClick = id => {
    navigate(`/detailed-product/${id}`);
  };
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }
  return (
    <>
      <div className="home">
        {/* {product.length > 0 && <h1>Products...</h1>} */}
        <div className="search-select">
          <div className="select-category">
            <select
              name=""
              id=""
              className="category-drop-down"
              value={category}
              onChange={e => {
                setCategory(e.target.value);
              }}
            >
              <option value="">All Category</option>
              <option value="Flower">Flower</option>
              <option value="Edibles">Edibles</option>
              <option value="Oils">Oils</option>

            </select>
          </div>
          <div className="search-wrapper">
            <input
              type="text"
              className="search-bar"
              placeholder="Search by name"
              value={searchWord}
              onChange={e => setSearchWord(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  setSearch(searchWord);
                }
              }}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={() => {
                setSearch(searchWord);
              }}
            ></i>
          </div>
        </div>
        <div className="price-filter">
          <input
            type="text"
            placeholder="min-price"
            value={minPrice}
            onChange={e => {
              setMinPrice(e.target.value);
            }}
          />
          <input
            type="text"
            value={maxPrice}
            placeholder="max-price"
            onChange={e => {
              setmaxPrice(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setFilterPrice({ min: minPrice, max: maxPrice });
            }}
          >
            Apply
          </button>
        </div>

        <div className="product-container">
          {product.map((item) => {
            return (
              <div
                className="product-card"
                onClick={() => {
                  onProductClick(item._id);
                }}
              >
                <img src={item.image} alt="..." />
                <p>{truncate(item?.name, 50)}</p>
                <p>
                  <span className="price-icon">$</span>{item.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
