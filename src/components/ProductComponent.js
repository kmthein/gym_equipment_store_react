import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import ItemForm from './ItemForm';
import CartContext from '../store/cart-content';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductItem from './ProductItem';

function RenderProductItem({product, onClick}) {
    return (
            <>
                <img src={product.image} alt={product.name}/>
                <h4>{product.name}</h4>
                <p>${product.price}</p>
            </>
    )
}

const Product = (props) => {
    const cartCtx = useContext(CartContext);

    const [loading, setLoading] = useState('true');

    const [error, setError] = useState('');
    
    const [products, setProducts] = useState([]);

    const [searchWords, setSearchWords] = useState('');

    const searchChangeHandler = (event) => {
        setSearchWords(event.target.value);
      }

    useEffect(() => {
        const fetchProducts = async() => {
            const response = await fetch('https://learned-sprite-361118-default-rtdb.firebaseio.com/products.json')
            if (!response.ok) {
                throw new Error('Request Failed');
            }
            
            const data = await response.json();
    
            const loadedProducts = [];
            for (const key in data) {
                loadedProducts.push({
                    id: key,
                    name: data[key].name,
                    image: data[key].image,
                    price: data[key].price,
                    description: data[key].description
                })
            }
            setProducts(loadedProducts);
            setLoading(false);
        }
        fetchProducts().catch ((error) => {
            setLoading(false);
            setError('Product not found.')
        });
    }, [])

    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchWords.toLowerCase())
        )
    })

    if (loading) {
        return (
            <div className='product'>
                <h2>All Products</h2>
                <div className='row product-link'>
                            <img src='../assets/images/loading2.gif' className='load-gif'/>
                    </div>
                </div>
        )
    }

    if (error) {
        return (
            <div className='product'>
                <h2>All Products</h2>
                <div className='row product-link'>
                            <h4 className='no-data'>Product Not Found.</h4>
                    </div>
                </div>
        )
    }
    const product = filteredProducts.map((product) => {
        return (
            <ProductItem 
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
            />
        )
    })

    console.log(product);

        return (
            <div className='product'>
                <h2>All Products</h2>
                <input
                type="text"
                className="col-2 col-sm-2 input-search col-lg-2"
                placeholder="Search" onChange={searchChangeHandler}
                />
                <div className='row product-link'>
                            {product}
                    </div>
                </div>
          );
}
 
export default Product;