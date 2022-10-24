import React, { useState,useEffect } from 'react';
import {Route,Routes, useNavigate } from 'react-router-dom'


import Header  from './components/Header';
import Home from './components/Home';
import Edits from './components/Edits';
import Add from './components/Add';


function App() {

  const navigate = useNavigate()
  const [address , setAddress] = useState({
    contacts: [],
    isLoading: true

  })

  useEffect(()=>{
    console.log('useeffect run')
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(res => setAddress(()=>{
            return {
                contacts: res,
                isLoading: false
            }
        }))
  },[])


  function addNewContact(newContact){
    setAddress(prevState=>{
      return{
        ...prevState,
        contacts: [...prevState.contacts, newContact]
      }
      
  })
  }
  

//   function updateContact(e){
//     console.log(e.target)
//         const {name, value ,className:contactid } = e.target
    
//         setAddress(prevState=>{
//           console.log(prevState.contacts)
//           let newArray= prevState.contacts

//           let upArray = newArray.map(item =>{
//             console.log(item.id, contactid)

//             if(item.id === parseInt(contactid,10)){
//               console.log(item.id,value)
//               console.log([item.name])

//               return {
//                 ...item,
//                 [name] : value
//               }
//             }else{
//               console.log('erturn')
//                 return item
//               }
//           })
//           console.log(upArray)
//           return {
//             ...prevState,
//             contacts: upArray
//           }
//         })
// }
 function  editContact(data){

    setAddress(prevState=>{
      const newArary = prevState.contacts.map(item =>( (item.id === data.id) ? data : item ))
      return{
        contacts:newArary,
        isLoading: false
      }
    })

    // console.log()
    navigate('/')
 
}
 
function deleteContact(id){
  console.log('dekete ' + id);
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(res=> console.log(res)
    //  setAddress(({
  //   contacts: res,
  //   isLoading: true
  // }))
  )
  
      // navigate('/')
setAddress(prevState=>{
 
  let newArary = prevState.contacts.filter(item => item.id !== id)

  return{
    ...prevState,
    contacts: newArary
  }
})

}     



    return (
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home contacts={address.contacts} isLoading={address.isLoading} handleDeleteContact={deleteContact}/>}/>     
          <Route path="/edit/:contactid" element={<Edits contacts={address.contacts} editContact={editContact}/>} />
          <Route exact path="/addcontact" element={<Add contacts={address.contacts} handleNewContact={addNewContact} />}/>
        </Routes>
      </div>
    )
  
}

export default App;
