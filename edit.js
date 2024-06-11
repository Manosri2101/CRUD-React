import React,{useState, useEffect} from "react";
import Customers from "./customer";
import { useNavigate } from "react-router-dom";
import './styles.css';

function Edit(){

    const[Order_id, setId]=useState("");
    const[name, setName]=useState("");
    const[addr, setAddr]=useState("");
    const[food, setFood]=useState("");
    const[pay, setPay]=useState("");

    let history=useNavigate();

    var index=Customers.map(function(e){
        return e.Order_id
    }).indexOf(Order_id);

    const handleUpdate=(e) => {
        e.preventDefault();

        let a=Customers[index];
        a.Order_id=Order_id;
        a.Name=name;
        a.Address=addr;
        a.Food_items=food;
        a.Payment=pay;

        history("/")
    }

    useEffect(()=>{
        setId(localStorage.getItem('Order_id'))
        setName(localStorage.getItem('name'))
        setAddr(localStorage.getItem('addr'))
        setFood(localStorage.getItem('food'))
        setPay(localStorage.getItem('pay'))
    },[])

    return(
        <>
             <form>
                <h1 style={{"textAlign":"left"}}>Update the Changes: </h1>
                <label>Name:</label><br/>
                <input type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}/><br/><br/>
                <label>Address:</label><br/>
                <input type="text" placeholder="Enter Address" value={addr} required onChange={(e) => setAddr(e.target.value)}/><br/><br/>
                <label>Food Items:</label><br/>
                <input type="text" placeholder="Enter Food items" value={food} required onChange={(e) => setFood(e.target.value)}/><br/><br/>
                <label>Payment Method:</label><br/>
                <input type="text" placeholder="Enter Payment method" value={pay} required onChange={(e) => setPay(e.target.value)}/><br/><br/>
                <button className="button_sub" onClick={(e) => handleUpdate(e)} type="submit">Update</button>
            </form>
        </>
    )
}
export default Edit
