import axios from 'axios'
import React from 'react'

const Items = ({ url, name, price, qty, cartId }) => {

    const removeItem = () => {
        axios.delete(`http://localhost:3000/item/${cartId}`)
        alert("item Removed")
    }



    return (
        <div style={{ margin: "10px", display: "flex", border: "1px solid gray", lineHeight: "20px" }}>
            <img src={url} alt="" style={{ height: "8rem", display: "inline", width: "8rem" }} />
            <span className='mx-3'>
                <p>{name}</p>
                <p>Price : {price}</p>
                <span>Qty :{qty} </span>
                <button className='btn btn-danger d-block' onClick={() => { removeItem() }}>Remove</button>
            </span>


        </div>
    )
}

export default Items
