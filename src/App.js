import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Pizza from './pizza.jsx';
import FormSchema from './formSchema.js'
import * as yup from 'yup';
import Axios from "axios";

const initialOrder = {
  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    mushrooms: false,
    onions: false,
    olives: false
  },
  specialInstructions: ''
}
const initialError = {
  name: '',
  size: '',
  toppings: {
    pepperoni: false,
    mushrooms: false,
    onions: false,
    olives: false
  },
  specialInstructions: ''
}
const App = () => {
  

  // const [form, setForm] = useState(initialForm)
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState()
  const [order, setOrder] = useState(initialOrder)

  useEffect(() => {
    FormSchema.isValid(order).then(valid => {
      setDisabled(!valid)
    })
  }, [order])

  const handleChange = e => {
    if (e.target.type === 'checkbox') {
      setOrder({ ...order, toppings: { ...order.toppings, [e.target.name]: !order.toppings[e.target.name] } })
      validateCheckbox(e.target.name, e.target.value)
    } else {
      setOrder({ [e.target.name]: e.target.value })
      validateForm(e.target.name, e.target.value)
    }
  }

  const validateForm = (name, value) => {
    yup.reach(FormSchema, name)
      .validate(value)
      .then(valid => {
        setError({ [name]: '' })
      })
      .catch(err => {
        setError({ [name]: err.error })
      })
  }

  const validateCheckbox = (name, value) => {
    yup.reach(FormSchema, `toppings.${name}`)
      .validate(value)
      .then(valid => {
        setError({ ...error, toppings: '', })
      })
      .catch(err => {
        setError({ ...error, toppings: err.error })
      })
  }

  const handleSubmit = e => {
    e.preventDefault();
    Axios.post('https://reqres.in/api/users', order)
      .then(response => {
        setOrder([...order, response.data])
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <h1>Lambda Eats</h1>
      <button>
        <Link to='/'>Home</Link>
      </button>
      <button>
        <Link to='/pizza'>Create Your Pizza</Link>
      </button>
      <Switch>

 

        <Route path='/pizza'>
          <Pizza
             order={order}
            disabled={disabled}
            submit={handleSubmit}
            handleChange={handleChange}
             errors={error} 
            />
        </Route>

      </Switch>
    </>
  );
};
export default App;
