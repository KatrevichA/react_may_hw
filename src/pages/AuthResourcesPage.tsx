import React, {useEffect, useState} from 'react';
import {IProduct} from "../models/IProduct";
import {loadAuthProducts, refresh} from "../services/api.services";


const AuthResourcesPage = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        loadAuthProducts()
            .then(products => {
                if (products) {
                    setProducts(prevState => products)
                    // setProducts(products)

                }
            })
            .catch(reason => {
                console.log(reason);
                refresh()
                    .then(value => loadAuthProducts())

            })
        return () => {
            console.log('useEffect done his work');
        }
    }, []);
    return (
        <div>
            {
                //
                products.map(value => <div>{value.title}</div>)

            }
        </div>
    );
};

export default AuthResourcesPage;