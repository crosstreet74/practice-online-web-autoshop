import React, { useEffect, useState } from 'react';

export default function CartItem() {

    const [cartData, setCartData] = useState([]);
    let process = require('../../../../assets/config/myProcess.json')

    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/cart`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setCartData(data)
            })
    })

    const cartList = cartData.map(item => {
        return (
            <tr>
                <td className="product-thumbnail">
                    <a href="/product/2"><img className="img-fluid" src="assets/img/product/fashion/2.jpg" alt="" /></a>
                </td>
                <td className="product-name">
                    <a href="/product/2">Lorem ipsum coat</a>
                    <div className="cart-item-variation">
                        <span>Color: blue</span>
                        <span>Size: x</span>
                    </div>
                </td>
                <td className="product-price-cart">
                    <span className="amount old">$18.50</span>
                    <span className="amount">$15.72</span>
                </td>
                <td className="product-quantity">
                    <div className="cart-plus-minus">
                        <button className="dec qtybutton">-</button>
                        <input className="cart-plus-minus-box" type="text" readonly="" value="1" />
                        <button className="inc qtybutton">+</button>
                    </div>
                </td>
                <td className="product-subtotal">$15.72</td>
                <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
            </tr>
        )
    })

    return (
        <tbody>
            {cartList}
        </tbody>
    );
}