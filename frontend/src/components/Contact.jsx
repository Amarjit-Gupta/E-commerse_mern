import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";

const Contact = ({ menu, setMenu }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        var valid = /^[A-Za-z\s]+$/;
        // console.log(name, email, phone, address);
        if (name == "" || email == "" || phone == "" || address == "") {
            toast.error("Please fill all box...");
            return false;
        }
        else if (!valid.test(name)) {
            toast.error("only letter and space is allowed in name...");
            return false;
        }
        else if (name.length < 3) {
            toast.error("Please enter greater than 2 character in name...");
            return false;
        }
        else if (phone.length != 10) {
            toast.error("Please enter 10 digits in phone No...");
            return false;
        }
        else if (isNaN(phone)) {
            toast.error("Please enter only digits in phone No...");
            return false;
        }
        else if (address.length < 6) {
            toast.error("Please enter greater than 5 character in address...");
            return false;
        }
        else if (name.trim() && email.trim() && phone.trim() && address.trim()) {
            console.log(name, email, phone, address);
            toast.success("Item ordered successfully...");
            setName("");
            setEmail("");
            setPhone("");
            setAddress("");
            setMenu(false);
        }
        else {
            toast.error("white space not allowed...");
        }
    }


    return (
        <>
            <Toaster />
            <div className={`contact-form ${menu ? "show" : ""}`}>
                <button className="hide" onClick={() => setMenu(false)}><RxCross2 /></button>
                <form onSubmit={handleSubmit}>
                    <div className="contact-child c-child">
                        <label>Name</label><br />
                        <input type="text" className="box" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="contact-child">
                        <label>Email Id</label><br />
                        <input type="email" className="box" placeholder="Enter email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="contact-child">
                        <label>Phone No</label><br />
                        <input type="text" className="box" placeholder="Enter phone No" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="contact-child">
                        <label>Address</label><br />
                        <textarea className="box" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                    </div>
                    <div className="contact-child">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;