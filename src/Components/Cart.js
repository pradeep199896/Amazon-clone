import React, { Component } from 'react';
import  "./Cart.css"
import ls from "local-storage"

export class Cart extends Component {





    render(){
        let cart_data=JSON.parse(ls.get("cartdata"))
        var TotalPrice=0;

        let display_data=cart_data.map((cart,index)=>{
            return(
                <div>
                
                <div className="cart-post" key={index}>
                <img src={cart.image} width="200px" height="220px"/>
                <div><h2 className="cart-title">{cart.title}</h2></div>
                <div><h3 className="cart-price">₹{cart.price}</h3></div>
                </div>
                <hr style={{width:"98%"}}></hr>
                </div>
                
            )
        })
        return (
           
            <div className="display">
            <div className="heading">
            <h1 style={{marginLeft:"66px",marginTop:"20px"}}>Shopping Cart</h1>
          <strong><p style={{marginRight:"347px",marginBottom:"0px",marginTop:"62px"}}>Price</p></strong>
            </div>
            <hr></hr>
            {display_data}
            </div>
        )
    }
       
}

export default Cart
