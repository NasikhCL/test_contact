import React from "react";
import { Link } from "react-router-dom";



export default function List(props){
   
    const{ contacts , isLoading, handleDeleteContact } = props
    let contact

    contact = contacts.map((item,index) => {
        return(
            <tr  key={item.id}>
                    <th scope="row">{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    
                    <td>
                        <Link to={`/edit/${item.id}`} ><button className="actions-button">Edit</button></Link>
                        <button className="actions-button" onClick={()=>handleDeleteContact(item.id)}>Delete</button>
                    </td>
            </tr>
            
        )
    })

  
    
    return(
        <div className="home">
            <Link to="/addcontact"><button className="add-contact-btn">Add Contact</button></Link>
            {isLoading ? <h1>Loading...</h1> : <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contact}
                </tbody>
            </table>}
            

            
        </div>
    )
}



