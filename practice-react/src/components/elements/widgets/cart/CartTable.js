import React, { useEffect, useState } from 'react';
import CartItem from "../../widgets/cart/CartItem"
import CartFooter from "../../widgets/cart/CartFooter"
import CartOption from "../../widgets/cart/CartOption"

export default function CartTable() {

    const [numItem, setNumItem] = useState(0)
    const [cartData, setCartData] = useState([])

    let process = require('../../../../assets/config/myProcess.json')

    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/cart`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setCartData(data)
            })
    }, [process.IP, process.PORT])

    const clearCart = () => {
        fetch(`http://${process.IP}:${process.PORT}/cart`, {
            method: "DELETE"
        })
    }

    return (
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">Your cart items</h3>
                <div className="row">
                    <div className="col-12">
                        <div className="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Unit Price</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
                                        <th>action</th>
                                    </tr>
                                </thead>
                                {
                                    cartData.map(item => {
                                        return (
                                            <CartItem data={item} key={item.id}/>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
                <CartOption clearCart={clearCart}/>
                <CartFooter />
            </div>
        </div>
    );
}
