import React, {useState, useEffect} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import NewOrder from './completedOrder.jsx';
import Pizza from './Pizza.jsx'
import axios from 'axios';
import * as yup from 'yup';
import FormSchema from './formSchema.js';

const initialOrder = {
    name:'',
    size:'',
    toppings: {
        pepperoni: false,
        mushrooms: false,
        onions: false,
        olives: false,
    },
    specialIntructions: '',
}
const initialErrors = {
    name:'',
}
const initialNewOrder = []
const initialDisabled = true

export default function App() {
  const [newOrders, setNewOrders]  = useState(initialNewOrder)
  const [order, setOrder] = useState(initialOrder)
  const [errors, setErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postcompletedOrder = completedOrder => {
      axios.post('https://reqres.in/api/users/', completedOrder)
      .then(response => {
          setNewOrders([response.data, ...newOrders])
          setOrder(initialOrder)
      })
      .catch(err => {
          console.log('error:', err)
      })
  }
  const inputChange = (name, value) => {
      yup
      .reach(FormSchema, name)
      .validate(value)
      .then(valid => {
          setErrors({
              ...errors, [name]: '',
          })
      })
      .catch(error => {
          setErrors({
              ...errors, [name]: error.errors[0],
          })
      })
      setOrder({...order, [name]: value})
  }
  const checkChange = (name, isChecked) => {
      setOrder({
          ...order, toppings: {
              ...order.toppings, [name]: isChecked,
          }
      })
  }
  const submit = () => {
      const completedOrder = {
          name: order.name.trim(),
          toppings: Object.keys(order.toppings).filter(hb => order.toppings[hb]),
      }
      postcompletedOrder(completedOrder)
  }
  console.log(newOrders)
  useEffect(() => {
      FormSchema.isValid(order).then(valid => {
          setDisabled(!valid)
      }, [order])
    })
      return (
          <div className='App'>
          <header>
             <h1>Lambda Eats</h1>
          </header>
          <button>
         <Link to='/'>Home</Link>
       </button>
       <button>
         <Link to='/pizza'>Create Your Pizza</Link>
       </button>
       <Switch>
        <Route exact path='/pizza'>
          <Pizza
          order={order}
          inputChange={inputChange}
          checkChange={checkChange}
          submit={submit}
          disabled={disabled}
          errors={errors}
          />
          {
              newOrders.map(newOrder => {
                  return (
                      <NewOrder
                      key={newOrder.id}
                      order={newOrder}
                      />
                  )
              })
          }
        </Route>
        </Switch> 
        </div> 
      ); 
  }
