import React, {FC} from 'react';
import {IProductType} from "../../models/IProductType";
import './Product.css';

interface IProps {
    product: IProductType
}

const Product:FC<IProps> = ({product}) => {


    return (
        <div className={'Product_block'}>

            <h3>{product.title}</h3>
            <button>{product.category}</button>
            <div className={'discount'}>
                SALE {product.discountPercentage}</div>
            <img src={product.thumbnail} alt={product.title}/>

            <h4>{product.brand}</h4>
            <p>{product.description}</p>

            <ul>
                <li>Price: {product.price}</li>
                <li>Rating: {product.rating}</li>
            </ul>


        </div>
    );
};

export default Product;