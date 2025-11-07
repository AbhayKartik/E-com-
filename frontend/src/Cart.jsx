import React, { useEffect, useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import Items from './Items';
import axios from 'axios';

const Cart = ({ cart }) => {
    const [items, setItems] = useState([])
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    useEffect(() => {
        axios.get("http://localhost:3000/cart").then((res) => {
            setItems(res.data)
        })
    }, [items])

    const cartClose = () => {
        cart(false)
    }
    const ids = items.map((item) => item.productId);
    let totalqty = items.reduce((total, item) => total + item.qty, 0);

    const HandleForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/order", {
            productIds: ids,
            name: name,
            qty: totalqty,
            email: email,
            price: total,
        })
        await axios.delete("http://localhost:3000/cart")
        alert("Order Confirmed");
        setIsFormOpen(false);

    }

    let total = items.reduce((total, item) => total + item.price, 0);


    return (
        <div style={{ position: "absolute", right: "0", height: "100vh", width: "20%", backgroundColor: "white", zIndex: "100" }}>
            <p className='fs-4 d-inline'> Items : {items.length}</p>
            <span onClick={cartClose} style={{ fontSize: "30px", position: "absolute", right: "0px" }}><IoCloseCircleOutline /></span>
            {items.map((data) => (

                <Items url={data.productUrl} name={data.name} price={data.price} qty={data.qty} cartId={data.productId} key={data.name} />
            ))}
            <div style={{ position: "absolute", bottom: "10vh", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <span>Total : {total} </span>
                <button className='btn btn-primary items-center' style={{ marginLeft: '50px' }} onClick={() => { setIsFormOpen(true) }} >Checkout</button>
            </div>

            {isFormOpen &&
                <div style={{ height: "250px", width: "500px", backgroundColor: "#EFE9E3", padding: "20px", position: "absolute", top: "20%", left: "-200%", zIndex: "5555" }}>

                    <p className='fs-3 text-center'>Confirm Your Order of {total}</p>
                    <form onSubmit={HandleForm}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="" id="name" onChange={(e) => { setName(e.target.value) }} /><br /><br />
                        <label htmlFor="email">Email</label>
                        <input type="text" name="" id="email" onChange={(e) => { setEmail(e.target.value) }} />
                        <button type='submit' className='btn btn-primary mx-3'>Submit</button>
                    </form>


                </div>
            }
        </div>
    )
}

export default Cart
