import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Products from './Products'
import axios from "axios"
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from './Cart';
const Home = () => {
    const [allProducts, setAllProducts] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3000/products").then((res) => {
            setAllProducts(res.data)
        })
    }, [])

    return (
        <>

            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px", // space between cards
                    justifyContent: "center",
                }}>
                    <span style={{ position: "absolute", right: "10px", fontSize: "30px", cursor: "pointer" }} onClick={() => { setIsCartOpen(true) }}> <AiOutlineShoppingCart /> </span>
                    {isCartOpen && <Cart cart={setIsCartOpen} />}
                    {allProducts.map((item) => (

                        <Products item={item} key={item.name} />
                        /* url={item.url} name={item.name} price={item.price} id={item._id} key={item.name}  */
                    ))}
                </div>
            </div>
        </>


    )
}

export default Home
