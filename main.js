import React from "react";
import Customers from "./customer";
import "./styles.css";
import { Link,useNavigate } from "react-router-dom";

function Main(){

    let history=useNavigate();

    const handleEdit=(Order_id,Name,Address,Food_items,Payment)=>{
        localStorage.setItem('Order_id',Order_id);
        localStorage.setItem('name',Name);
        localStorage.setItem('addr',Address);
        localStorage.setItem('food',Food_items);
        localStorage.setItem('pay',Payment);
    }

    const handleDelete=(Order_id)=>{
        var index=Customers.map(function(e){
            return e.Order_id
        }).indexOf(Order_id);
        Customers.splice(index,1);
        history('/');
    }
    return(
        <>
            <><h1>Customer Details</h1></>
            <br/>
            <>
                <table className="tableclass">
                    <thead>
                        <tr>
                            <th>
                                Order_id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Food_items
                            </th>
                            <th>
                                Payment
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Customers && Customers.length > 0
                            ?
                            Customers.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Order_id}
                                        </td>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Address}
                                        </td>
                                        <td>
                                            {item.Food_items}
                                        </td>
                                        <td>
                                            {item.Payment}
                                        </td>
                                        <td>
                                            <Link to={`/edit`}>
                                           <button onClick={() => handleEdit(item.Order_id,item.Name,item.Address,item.Food_items,item.Payment)}>EDIT</button>
                                           </Link>
                                           &nbsp;
                                           <button onClick={() => handleDelete(item.Order_id)}>DELETE</button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No records found"
                        }
                    </tbody>
                </table>
            </>
           <br/>
           <Link to="/create">
                <button  className="button_add">CREATE</button> 
           </Link>
        </>
    )
}
export default Main