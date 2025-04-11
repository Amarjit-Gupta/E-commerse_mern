import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/Cart';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {

    const [cart, setCart] = useState(() => {
        let rawData = localStorage.getItem("cartXYZ");
        if (!rawData) {
            return [];
        }
        else {
            return JSON.parse(rawData);
        }
    });

    const [show, setShow] = useState(true);

    const handleClick = (item) => {
        let isExist = false;
        cart.forEach((product) => {
            if (item.id === product.id)
                isExist = true;
            });
            if (isExist) {
            toast.error("Item is already added to cart...");
            return false;
            }
            setCart([...cart, item]);
            toast.success("Item added to cart...");
            }

    const handleChange = (item, d) => {
        let key = -1;
        cart.forEach((data, index) => {
            if (data.id === item.id)
                key = index;
            });
        const tempData = cart;
        tempData[key].amount += d;

        if (tempData[key].amount === 0)
            tempData[key].amount = 1;
            setCart([...tempData])
    }


    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        toast.success("Item removed to cart...");
    }

    useEffect(() => {
        localStorage.setItem("cartXYZ", JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <Toaster />
            <Navbar size={cart.length} setShow={setShow} />
            {
                show ? <Product handleClick={handleClick} /> : <Cart handleRemove={handleRemove} cart={cart} setCart={setCart} handleChange={handleChange} setShow={setShow} />
            }
        </>
    )
}

export default App;