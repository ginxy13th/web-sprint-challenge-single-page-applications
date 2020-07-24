import React from 'react';

const Pizza = (props) => {
    console.log(props)
    const { order, disabled, submit, handleChange } = props

    return(
        <div>
        <form>
            <div submit={submit}>
                <input onChange={handleChange} type='text' name='name' value='' id='name' placeholder='Please Enter Name' />
                <select name='size' >
                    <option value='' select>--Pick a Size</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xLarge'>Extra Large</option>
                </select>
            </div>
            <div>
                
                <label htmlFor='pepperoni'>Pepperoni
                    <input 
                    onChange={handleChange}
                    type='checkbox'
                    name='pepperoni'
                    />
                </label>

                
                <label htmlFor='mushrooms'>Mushrooms
                    <input
                    onChange={handleChange}
                    type='checkbox'
                    id='mushrooms'
                    name='mushrooms'
                    />
                </label>

                
                <label htmlFor='onions'>Onions
                <input
                onChange={handleChange}
                type='checkbox'
                id='onions'
                name='onions'
                />
                </label>

                
                <label htmlFor='olives'>Olives
                <input
                onChange={handleChange}
                type='checkbox'
                id='olives'
                name='olives'
                />
                </label>
            </div>
            <button disabled={disabled}>Submit Your Order</button>
        </form>
        </div>
    )
}
export default Pizza