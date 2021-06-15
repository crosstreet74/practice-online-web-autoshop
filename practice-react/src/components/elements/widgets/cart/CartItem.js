import React from 'react';

export default function CartItem() {
    return ( 
        <tbody>

            <tr>
                <td class="product-thumbnail">
                    <a href="/product/2"><img class="img-fluid" src="assets/img/product/fashion/2.jpg" alt="" /></a>
                </td>
                <td class="product-name">
                    <a href="/product/2">Lorem ipsum coat</a>
                    <div class="cart-item-variation">
                        <span>Color: blue</span>
                        <span>Size: x</span>
                    </div>
                </td>
                <td class="product-price-cart">
                    <span class="amount old">$18.50</span>
                    <span class="amount">$15.72</span>
                </td>
                <td class="product-quantity">
                    <div class="cart-plus-minus">
                        <button class="dec qtybutton">-</button>
                        <input class="cart-plus-minus-box" type="text" readonly="" value="1" />
                        <button class="inc qtybutton">+</button>
                    </div>
                </td>
                <td class="product-subtotal">$15.72</td>
                <td class="product-remove"><button><i class="fa fa-times"></i></button></td>
            </tr>

            <tr>
                <td class="product-thumbnail"><a href="/product/2"><img class="img-fluid" src="assets/img/product/fashion/2.jpg" alt="" /></a></td>
                <td class="product-name">
                    <a href="/product/2">Lorem ipsum coat</a>
                    <div class="cart-item-variation">
                        <span>Color: blue</span>
                        <span>Size: m</span>
                    </div>
                </td>
                <td class="product-price-cart">
                    <span class="amount old">$18.50</span>
                    <span class="amount">$15.72</span>
                </td>
                <td class="product-quantity">
                    <div class="cart-plus-minus">
                        <button class="dec qtybutton">-</button>
                        <input class="cart-plus-minus-box" type="text" readonly="" value="2" />
                        <button class="inc qtybutton">+</button>
                    </div>
                </td>
                <td class="product-subtotal">$31.44</td>
                <td class="product-remove">
                    <button><i class="fa fa-times"></i></button>
                </td>
            </tr>

            <tr>
                <td class="product-thumbnail"><a href="/product/3"><img class="img-fluid" src="assets/img/product/fashion/3.jpg" alt="" /></a></td>
                <td class="product-name">
                    <a href="/product/3">Lorem ipsum jacket</a>
                    <div class="cart-item-variation">
                        <span>Color: white</span>
                        <span>Size: x</span>
                    </div>
                </td>
                <td class="product-price-cart">
                    <span class="amount old">$17.45</span>
                    <span class="amount">$10.47</span>
                </td>
                <td class="product-quantity">
                    <div class="cart-plus-minus">
                        <button class="dec qtybutton">-</button>
                        <input class="cart-plus-minus-box" type="text" readonly="" value="1" />
                        <button class="inc qtybutton">+</button>
                    </div>
                </td>
                <td class="product-subtotal">$10.47</td>
                <td class="product-remove">
                    <button><i class="fa fa-times"></i></button>
                </td>
            </tr>
            
            <tr>
                <td class="product-thumbnail"><a href="/product/4"><img class="img-fluid" src="assets/img/product/fashion/4.jpg" alt="" /></a></td>
                <td class="product-name">
                    <a href="/product/4">Lorem ipsum fashion coat</a>
                    <div class="cart-item-variation">
                        <span>Color: blue</span>
                        <span>Size: x</span>
                    </div>
                </td>
                <td class="product-price-cart">
                    <span class="amount">$15.50</span>
                </td>
                <td class="product-quantity">
                    <div class="cart-plus-minus">
                        <button class="dec qtybutton">-</button>
                        <input class="cart-plus-minus-box" type="text" readonly="" value="1" />
                        <button class="inc qtybutton">+</button>
                    </div>
                </td>
                <td class="product-subtotal">$15.50</td>
                <td class="product-remove">
                    <button><i class="fa fa-times"></i></button>
                </td>
            </tr>
        </tbody>
    );
}