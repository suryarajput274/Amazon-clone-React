import React from "react";
import "./Product.css";

function Product() {
    return (
    <div className="product">
        <div className="Product__info">
            <p>The Lean</p>
            <p className="Product__price">
                <small>$</small>
                <strong>15.5</strong>
            </p>
            <div className="product__rating">
                <p>🌟</p>
            </div>    
         </div>   
        
        <img 
            src ="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        />
        <button>Add to Basket</button>
    </div>

    );   
}

export default  Product;