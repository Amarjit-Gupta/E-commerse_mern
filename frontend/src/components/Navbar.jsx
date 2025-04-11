import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ size, setShow }) => {
    return (
        <div className="navbar">
            <div className="heading" onClick={() => setShow(true)}>
                Products
            </div>
            <div className="cart" onClick={() => setShow(false)}>
                <span>
                    <FaShoppingCart />
                </span>
                <sup>{size}</sup>
            </div>
        </div>
    )
}

export default Navbar;