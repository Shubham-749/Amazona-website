import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import data from '../data';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {

    //Hookes
    //const [products, setProduct] = useState([]);
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {
            //
        };
    }, []);

    // (1) check loading. (2) if not loading then check for error. (3) everything is fine. show products
    return loading ? <div>Loading...</div> :

        error ? <div>{error}</div> :

            <ul className="products">

                {/* make JS array for product items */}
                {
                    products.map(product =>
                        <li key={product._id}>
                            <div className="product">

                                <Link to={'/product/' + product._id}>
                                    <img className="product-image" src={product.image} alt="product" />
                                </Link>

                                <div className="product-name">
                                    <Link to={'/product/' + product._id}>{product.name}</Link>
                                </div>

                                <div className="product-brand">{product.brand}</div>
                                <div className="product-price">{product.price}</div>
                                <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>

                            </div>
                        </li>)
                }



            </ul>
}
export default HomeScreen;