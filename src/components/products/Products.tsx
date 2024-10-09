import React, {FC} from 'react';
import Product from "../product/Product";
import {allProductList} from "../../data";
import {IProductType} from "../../models/IProductType";
import './Products.css'


const Products:FC = () => {

const products:IProductType[] = allProductList.products;

    return (
        <div className={'Products_page'}>
            {products.map((product:IProductType) => <Product key={product.id} product={product}/>)}
        </div>
    );
};

export default Products;