import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./products.css"

export class Products extends Component {
    state={
        products:[]
    }
  async  componentWillMount(){
        let data= await fetch('https://fakestoreapi.com/products/category/'+this.props.match.params.category)
        data= await data.json()
        // console.log(data)
        this.setState({
            products:data
        })
    }

    render() { 
        let data=this.state.products.map((value,index)=>{
        return(
            <Link key={value.id} to={`/product/${value.id}`}>
            <div className="product">
            <img className="products-img" src={value.image}/>
            <div className="product-info">
            <p >{value.title}</p>
            <p>Price:Rs.{value.price}/-</p>
            </div>
            </div>
            </Link>
        // console.log(this.props.match.params.category)
        )
    })
    return(
        <div className="products-container">
        {data}</div>
    )
}

}
export default Products