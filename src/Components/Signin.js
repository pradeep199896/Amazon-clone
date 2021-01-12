import React, { Component } from 'react';
import ls from "local-storage";
import { Link, Redirect } from 'react-router-dom';
import "./Signin.css";
export class Signin extends Component {
    state={
        email:"",
        password:"",
        isLogin:false
    }
    onchange=(e,name)=>{
        let data={}
        data[`${name}`]=e.target.value
        this.setState(data)
    }
    SigninOk=()=>{
        let email_found;let data=JSON.parse(ls.get("userdata"))
       for(let i=0;i<data.length;i++){
       if(data[i].email==this.state.email){
          email_found=this.state.email
          if(data[i].password==this.state.password){
              this.props.setUserName(data[i].username)
            alert("signed in successfully")
            this.setState({email:"",password:"",isLogin:true})
          }else{
            alert("incorrect password")
            this.setState({email:"",password:""}) 
          }
       }
     }
   }
    render() {
        if(this.state.isLogin){
            return(
                <Redirect to="/"/>
            )
        }
        return (
            <div className="signin-details">
            <form className="form">
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Email</p>
            <input type="text" placeholder="Enter email" value={this.state.email} name="email" onChange={(e)=>{this.onchange(e,"email")}}></input></div>
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <p className="label">Password</p>
            <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={(e)=>{this.onchange(e,"password")}}></input>
            </div>
            <button className="Signin-button" onClick={this.SigninOk}>Sign In!</button>
        <Link to="/Signup"><button style={{marginRight:"0px"}} className="Signin-button" onClick={this.SigninOk}>Create Your Account!</button></Link>
            </form>
            </div>
        )
    }
}
export default Signin
