import React, { useState } from 'react'
// import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from './Cart';
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios';


const Products = ({ item }) => {
    // const [isCartOpen, setIsCartOpen] = useState(false)
    // const [allProducts, setAllProducts] = useState([])

    const [qty, setQty] = useState(0)

    const AddToCart = (url, id, name, qty, price) => {

        axios.post("http://localhost:3000/cart", {
            productUrl: url,
            productId: id,
            name: name,
            qty: qty,
            price: price * qty,
        })
        alert("Item Added")

    }

    const handleIncreaseQty = () => {
        setQty(
            qty + 1
        );
    };

    // useEffect(() => {
    //     axios.get("http://localhost:3000/products").then((res) => {
    //         setAllProducts(res.data)
    //     })
    // }, [])



    return (
        <div >


            <div className="card" style={{ width: "18rem", margin: "30px", marginTop: "3rem", }} >
                <img src={item.url} className="card-img-top" alt={item.name} style={{ height: "300px" }} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price : {item.price} </p>
                    <span className='d-block ' style={{ cursor: "pointer" }} >Qty: {qty} <span onClick={
                        handleIncreaseQty} className='fs-3 ' ><CiCirclePlus /> </span> </span>
                    <button href="#" className="btn btn-primary" onClick={() => { AddToCart(item.url, item._id, item.name, qty, item.price) }} >Add to cart</button>
                </div>
            </div>

        </div >
    )
}

export default Products
