import React from 'react';
import { Link } from "react-router-dom";



const ProductsItem = ({products, listproducts}) => {


    return (<>
        <div className="card card--movies">
            <Link to={`${products.id}`} className="card__header">
                <img
                    src="https://e.rpp-noticias.io/normal/2021/12/27/334033_1194671.jpg"
                    alt="Img"
                    width="100%"
                    height="auto"
                    className="card__header-img"
                />
            </Link>
            <div className="card__body card__body--movies">
                <h3 className="card__title card__title--movies">{products.producto}</h3>
            </div>
        </div></>);
}

export default ProductsItem;