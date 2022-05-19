import React from 'react';
import Product from './Product';

function Cart(props) {
    const [cartproducts, setcartproducts] = React.useState([
        {
          name:'vivox80 mobile',
          count:5,
          price:45000
        },
        {
          name:'dell laptop',
          count:2,
          price:95000
        },
        {
          name:'air condition',
          count:3,
          price:34000
        },    
      ]);
      const [totalprice, settotalprice] = React.useState(0);
      function calTotalPrice(){
        var total=0;
        cartproducts.forEach(function(product){
          total = total+(product.count*product.price);
        })
        settotalprice(total)
      }
      function inc(index){
        var temp = [...cartproducts];
        temp[index].count++;
        setcartproducts([...temp])
      }
      function dec(index){
        var temp = [...cartproducts];
        temp[index].count--;
        setcartproducts([...temp])
      }
    return (
        <div>
             <table align='center' cellpadding='10'>
                <thead>
                <th>Sno.</th>
                <th>Name</th>
                <th>Price</th>
                <th>Count</th>
                </thead>
                <tbody>
                    {
                        cartproducts.map((product,i)=>{
                            return <Product product={product} i={i} inc={inc} dec={dec}></Product>
                        })
                    }
                </tbody>
            </table>
            <button onClick={calTotalPrice}>Total Price</button>
            <h1>{totalprice}</h1>
        </div>
    );
}

export default Cart;