// import React from 'react';

// const Pizza = (props) => {
//     console.log(props)
//     const { order, disabled, submit, handleChange } = props

//     return(
//         <div submit={submit}  >
//         <form>
//             <div>
//                 <label>
//                 <input 
//                 onChange={handleChange}
//                 type='text'
//                 name='name'
//                 placeholder='Please Enter Name' />
//                 </label>

//                 <label>
//                 <select name='size' >
//                     <option value='' select>--Pick a Size</option>
//                     <option value='medium'>Medium</option>
//                     <option value='large'>Large</option>
//                     <option value='xLarge'>Extra Large</option>
//                 </select>
//                 </label>
//             </div>
//             <div>
                
//                 <label htmlFor='pepperoni'>Pepperoni
//                     <input 
//                     onChange={handleChange}
//                     type='checkbox'
//                     id='pepperoni'
//                     name='pepperoni'
//                     checked={order.toppings.pepperoni === true}
//                     />
//                 </label>

                
//                 <label htmlFor='mushrooms'>Mushrooms
//                     <input
//                     onChange={handleChange}
//                     type='checkbox'
//                     name='mushrooms'
//                     />
//                 </label>

                
//                 <label htmlFor='onions'>Onions
//                 <input
//                 onChange={handleChange}
//                 type='checkbox'
//                 id='onions'
//                 name='onions'
//                 />
//                 </label>

                
//                 <label htmlFor='olives'>Olives
//                 <input
//                 onChange={handleChange}
//                 type='checkbox'
//                 id='olives'
//                 name='olives'
//                 />
//                 </label>
//             </div>
//             <div>
//                 <label>Special Instructions
//                     <input
//                     value=''
//                     name='specialInstructions'
//                     onChange={handleChange}
//                     type='text'
//                     />
//                 </label>
//             </div>
//             <button >Submit Your Order</button>
//         </form>
//         </div>
//     )
// }
// export default Pizza