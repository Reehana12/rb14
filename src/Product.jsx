import React from 'react';

function Product(props) {
    return (
            <tr>
                <td>{props.i}</td>
                <td>{props.product.name}</td>
                <td>{props.product.price}</td>
                <td>
                    <button onClick={()=>{props.inc(props.i)}}>+</button>
                    {props.product.count}
                    <button onClick={()=>{props.dec(props.i)}}>-</button>
                </td>
            </tr>
    );
}

export default Product;