import React, { useState,useEffect } from 'react';
import {Route,Routes, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';


import Header  from './components/Header';
import Home from './components/Home';
import Edits from './components/Edits';
import Add from './components/Add';



function App() {

  const navigate = useNavigate()
  const [contactBook , setContactBook] = useState({
    contacts: [],
    isLoading: true

  })

  useEffect(()=>{
    console.log('useeffect run')
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(res => setContactBook(()=>{
            return {
                contacts: res,
                isLoading: false
            }
        }))
  },[])


  function addNewContact(id,name,email,phone){
    let newContact ={ id,name,email,phone }

    setContactBook(prevState=>{
      return{

        contacts: [...prevState.contacts, newContact],
        isLoading: false
      }
      
  })
  toast.success('New Contact Added')

  }
  

 function editContact(data){

    setContactBook(prevState=>{
      const newArary = prevState.contacts.map(item =>( (item.id === data.id) ? data : item ))
      return{
        contacts:newArary,
        isLoading: false
      }
    })

  
    toast.success('Contact Edited') 
    navigate('/')
}
 
function deleteContact(id){
  console.log('dekete ' + id);
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(res=> console.log(res)
    
  )
  
   
setContactBook(prevState=>{
 
  let newArary = prevState.contacts.filter(item => item.id !== id)

  return{
    ...prevState,
    contacts: newArary
  }
})
toast.error("Contact Deleted!");

}     



    return (
      <div className="App">

        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home contacts={contactBook.contacts} isLoading={contactBook.isLoading} handleDeleteContact={deleteContact}/>}/>     
          <Route path="/edit/:contactid" element={<Edits contacts={contactBook.contacts} editContact={editContact}/>} />
          <Route exact path="/addcontact" element={<Add contacts={contactBook.contacts} handleNewContact={addNewContact} />}/>
        </Routes>
      </div>
    )
  
}

export default App;






