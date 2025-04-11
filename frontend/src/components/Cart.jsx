import { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { BsArrowLeft } from "react-icons/bs";
import Contact from './Contact';

const Cart = ({ cart, handleChange, setShow, handleRemove }) => {

    const [menu, setMenu] = useState(false);
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let val = 0;
        cart.map((item) => (
            val += item.amount * item.price
        ));
        setPrice(val);
    }

    useEffect(() => {
        handlePrice();
    }, [cart]);

    // console.log("length: ", cart.length);

    const handleShow = () => {
        setMenu(true);
    }

    return (
        <div>
            <div className="scroll">
                {
                    cart.length >= 1 ?
                        cart.map((item, i) => {
                            return (
                                <div className="main-cart" key={item.id}>
                                    <div className="cart-child1"><img src={item.img} />
                                    </div>
                                    <div className="cart-child2">
                                        <div className="child-text1">
                                            <p className="child-title">{item.title}</p>
                                            <p className="desc">{item.description.length >= 35 ? item.description.slice(0, 32) + "..." : item.description}</p>
                                        </div>
                                        <div className="child-text2">
                                            <div className="plus" onClick={() => handleChange(item, +1)}><FaPlus /></div>
                                            <div className="qty">{item.amount}</div>
                                            <div className="minus" onClick={() => handleChange(item, -1)}><FaMinus /></div>
                                        </div>
                                        <div className="child-text3">
                                            <div className="item-price">${item.price}</div>
                                            <div className="remove" onClick={() => handleRemove(item.id)}>remove</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className="cart-image"><img src="./images/cart.jpg" alt="" /><p className="not-found">Cart is empty</p></div>
                }
            </div>
            <div className="total-price-box">
                <div className="total-price-box-child1" onClick={() => setShow(true)}>
                    <div><BsArrowLeft className='left-arrow' /></div>
                    <div>Continue shoping</div>
                </div>
                <div className="total-price-box-child2">
                    <div className="total-price">
                        <div>Total Price :</div>
                        <div>${price}</div>
                    </div>
                    <button className="checkout" disabled={price <= 0} onClick={handleShow}>Checkout</button>
                </div>
            </div>
            <Contact menu={menu} setMenu={setMenu} />
        </div>
    )
}
export default Cart;