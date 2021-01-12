import './App.css';
import Header from "./Components/header"
import React from "react"
import Home from './Components/home';
import { BrowserRouter, Route,} from "react-router-dom";
import Products from './Components/products';
import ProductDetails from "./Components/ProductDetails"
import Footer from './Components/footer';
import Signin from './Components/Signin';
import Signup from './Components/SignUp';
import Cart from './Components/Cart';
// import Body from "./Components/body"
class App extends React.Component{
  state={
    username:"",
  }
  setUserName=(username)=>{
    this.setState({username})
  }
  render(){
    return(
      <div>
    <BrowserRouter>
    <Header username={this.state.username}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Signin"  render={()=>{return <Signin setUserName={this.setUserName} />}}/>
    <Route exact path="/Signup" component={Signup}/>
    <Route exact path="/products/:category" component={Products}/>
    <Route exact path="/product/:id" component={ProductDetails}/>
    <Route exact path="/cart" component={Cart}/>
    <Footer/>
    </BrowserRouter> 
   
    </div>
    )
  }
}

export default App;
