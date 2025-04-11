import { useEffect, useState } from 'react';
import Data from './Data';
import { URL } from '../URL';

const Product = ({ handleClick }) => {

  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let data = await fetch(URL);
      let result = await data.json();
      // console.log(result);
      if (result.message) {
        console.log(result.message);
        setLoading(false);
      }
      if (result.result) {
        // console.log(result.result);
        setProduct(result.result);
        setLoading(false);
      }
    }
    catch (err) {
      console.log("error: ", err);
    }
  }

  // console.log(product);

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <h1 className="product-list">Product List</h1>
      <div className="main">
        {loading ? <img className="loading1" src="./images/loader.gif" alt="Broken Icon" /> :
          product.length >= 1 ?
            product.map((item) => (
              <Data item={item} key={item.id} handleClick={handleClick} />
            ))
            :
            <p className="not-found">Data not found</p>
        }
      </div>
    </>
  )
}

export default Product;