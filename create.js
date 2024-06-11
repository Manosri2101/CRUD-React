import React,{useState} from "react";
import Customers from "./customer";
import {v4 as uuid} from "uuid";
import {useNavigate } from "react-router-dom";
import './styles.css';

function Create(){
    const[name, setName]=useState("");
    const[addr, setAddr]=useState("");
    const[food, setFood]=useState("");
    const[pay, setPay]=useState("");

    let history=useNavigate();

    const handleSubmit=(e) => {
        e.preventDefault();

        const ids= uuid();
        let uniqueId=ids.slice(0,8);
        let a=name;
        let b=addr;
        let c=food;
        let d=pay;

        Customers.push({Order_id:uniqueId,Name:a,Address:b,Food_items:c,Payment:d});

        history("/")
    }
    return(
        <>
            <form>
                <h1 style={{"textAlign":"left"}}>Enter Details to Add: </h1>
                <label>Name:</label><br/>
                <input type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}/><br/><br/>
                <label>Address:</label><br/>
                <input type="text" placeholder="Enter Address" required onChange={(e) => setAddr(e.target.value)}/><br/><br/>
                <label>Food Items:</label><br/>
                <input type="text" placeholder="Enter Food items" required onChange={(e) => setFood(e.target.value)}/><br/><br/>
                <label>Payment Method:</label><br/>
                <input type="text" placeholder="Enter Payment method" required onChange={(e) => setPay(e.target.value)}/><br/><br/>
                <button className="button_sub" onClick={(e) => handleSubmit(e)} type="submit">Submit</button>
            </form>
        </>
    )
}
export default Create