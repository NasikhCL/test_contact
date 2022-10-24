// import { useEffect,  applyMiddleware } from "react"
// import redux, {createStore} from "react-redux"
// import thunk from "redux-thunk"

// function showContact() {
    
//     return (dispatch) => {
        
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res=> res.json())
        //     .then(res=>{
//                 console.log(res)
//                 dispatch({
//                     type: "SHOW_CONTACT",
//                     payload:res
//                 })            
//             }

//         }
//         }



// function reducer(contact = [], action) {
//     switch(action.type) {
//         case "SHOW_CONTACT":
//             return action.payload
//         default:
//             return contact
//     }
// }

// const store = createStore(reducer, applyMiddleware(thunk))
// store.subscribe(() => console.log(store.getState()))
// export default store
