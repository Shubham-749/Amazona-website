import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import data from '../data';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
    //you can see in console that we can access the product using id as in the below line
    //console.log(props.match.params.id);

    //defining hooke for qty selected by user
    const [qty, setQty] = useState(1);       //default value is 1

    const productDetails = useSelector(state => state.productDetails);
    //object destructuring
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        // empty array i.e. [] means that the below line code will run after component demount
        dispatch(detailsProduct(props.match.params.id));
        return () => {

        };
    }, [])

    //to handle Add to cart
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    //render section
    return <div>
        <div className="back-to-result">
            <Link to="/">Back to result</Link>
        </div>

        {loading ? <div>Loading...</div> :
            error ? <div>{error} </div> :
                (
                    <div className="details">
                        <div className="details-image">
                            <img src={product.image} alt="product"></img>
                        </div>

                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>

                                <li>
                                    {product.rating} Stars ({product.numReviews} Reviews)
                    </li>

                                <li>
                                    Price: <b>Rs.{product.price}</b>
                                </li>

                                <li>
                                    Description:
                        <div>
                                        {product.description}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: {product.price}
                                </li>
                                <li>
                                    Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                </li>
                                <li>
                                    {/* no. selected by user will be put in 'qty' variable */}
                                    Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                        {[...Array(product.countInStock).keys()].map(x => <option key={x + 1} value={x + 1}>{x + 1}</option>)}
                                    </select>
                                </li>
                                <li>
                                    {/* if there is 0 qty then hide AddToCart button */}
                                    {product.countInStock > 0 &&
                                        <button onClick={handleAddToCart} className="button primary">Add to cart</button>}
                                </li>
                            </ul>
                        </div>
                    </div>
                )
        }

    </div>
}
export default ProductScreen;