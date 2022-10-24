import React,{useState} from "react";
import { Link } from "react-router-dom";


export default function Add(props){

// const navigate = useNavigate()
const {contacts, handleNewContact} =props    

const[name, setName]=useState('')
const[email, setEmail]=useState('')
const[phone, setPhone]=useState('')




function addContact(){
    fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
    name: name,
    email: email,
    phone: phone,
    id: contacts.length + 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => handleNewContact(json));

// navigate('/')

}
    return(
        <div className="add-contact">
            <h2>Add New Contact</h2>
            <form onSubmit={addContact}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" onChange={(e)=> setName(e.target.value)}  value={name} name="name" id="name" placeholder="Enter Name" required/>
                
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)}  value={email} id="email" name="email" placeholder="Enter email" required />
                
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="phone" className="form-control" onChange={(e)=> setPhone(e.target.value)}  value={phone} name="phone" id="phone" placeholder="Enter Phone" required/>
                </div>
                <button type="submit" className="btn btn-dark">Confirm</button> 
                <Link to="/"><button type="submit" class="btn btn-danger">cancel</button></Link>
            </form>

        </div>
    )
}

