// import React, { useState, useEffect } from "react";
// import { Link, Route, Switch } from 'react-router-dom';
// import Pizza from './oldpizza.jsx';
// import FormSchema from './formSchema.js'
// import * as yup from 'yup';
// import Axios from "axios";
// import NewOrder from "./completedOrder.jsx";

// const initialOrder = {
//   name: '',
//   size: '',
//   toppings: {
//     pepperoni: false,
//     mushrooms: false,
//     onions: false,
//     olives: false
//   },
//   specialInstructions: ''
// }
// const initialError = {
//   name: '',
//   size: '',
//   toppings: {
//     pepperoni: false,
//     mushrooms: false,
//     onions: false,
//     olives: false
//   },
//   specialInstructions: ''
// }
// const initialNewOrder = []
// const App = () => {
  

//   // const [form, setForm] = useState(initialForm)
//   const [disabled, setDisabled] = useState(true)
//   const [error, setError] = useState(initialError)
//   const [order, setOrder] = useState(initialOrder)
//   const [newOrder, setNewOrder] = useState(initialNewOrder)

//   useEffect(() => {
//     FormSchema.isValid(order).then(valid => {
//       setDisabled(!valid)
//     })
//   }, [order])

//   const handleChange = (type, name, value) => {
//     if (type === 'checkbox') {
//       setOrder({ ...order, toppings: { ...order.toppings, [name]: !order.toppings[name] } })
//       validateCheckbox(name, value)
//     } else {
//       setOrder({[name]: value})
//       validateForm(name, value)
//     }
//   }

//   const validateForm = (name, value) => {
//     yup.reach(FormSchema, name)
//       .validate(value)
//       .then(valid => {
//         setError({ [name]: '' })
//       })
//       .catch(err => {
//         setError({ [name]: err.error })
//       })
//   }

//   const validateCheckbox = (name, value) => {
//     yup.reach(FormSchema, `toppings.${name}`)
//       .validate(value)
//       .then(valid => {
//         setError({ ...error, toppings: '', })
//       })
//       .catch(err => {
//         setError({ ...error, toppings: err.error })
//       })
//   }

//   const handleSubmit = e => {
//     e.preventDefault();
//     Axios.post('https://reqres.in/api/users', order)
//       .then(response => {
//         setNewOrder([...newOrder, response.data])
//         setOrder(initialOrder)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }

//   return (
//     <>
//       <h1>Lambda Eats</h1>
//       <button>
//         <Link to='/'>Home</Link>
//       </button>
//       <button>
//         <Link to='/pizza'>Create Your Pizza</Link>
//       </button>
//       <Switch>
//         <Route exact path='/pizza'>
//           <Pizza
//             order={order}
//             disabled={disabled}
//             submit={handleSubmit}
//             handleChange={handleChange}
//              errors={error} 
//             />
//             {
//               newOrder.map(order => {
//               return(
//                 <NewOrder
//                 key={order.id}
//                 order={order}
//                 />
//               )
//             })} 
//         </Route>

//       </Switch>
//     </> 
// )};
// // export default App;
