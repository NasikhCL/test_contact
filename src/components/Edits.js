import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";





export default function Edits(props){
 


    const {contacts, editContact} = props

   const {contactid} =useParams()
   const [editName,setEditName]=useState(contacts[contactid -1].name)
   const [editEmail,setEditEmail]=useState(contacts[contactid -1].email)
   const [editPhone,setEditPhone]=useState(contacts[contactid -1].phone)


   function handleChange(e){
    const {name, value}=e.target
    if(name === "name"){
        setEditName(value)

    }
    if(name === "email"){
        setEditEmail(value)
    }
    if(name === "phone"){
        setEditPhone(value)
    }

   }
   const submitEdit = (e)=>{
    
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${contactid}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: parseInt(contactid,10),
          name: editName,
          email: editEmail,
          phone: editPhone,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => editContact(data));

   
}



    return (
        <div className="edits">
            <h2>Edit Contact</h2>
            <form onSubmit={submitEdit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" onChange={handleChange} value={editName} name="name" id="name" placeholder="Enter Name" />
                
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" onChange={handleChange} value={editEmail} id="email" name="email" placeholder="Enter email" />
                
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" onChange={handleChange} value={editPhone} name="phone" id="phone" placeholder="Enter Phone" />
                </div>
                <button type="submit" className="btn btn-dark">Confirm</button> 
                <Link to="/"><button type="submit" className="btn btn-danger">cancel</button></Link>
            </form>
        </div>
    )
}

            