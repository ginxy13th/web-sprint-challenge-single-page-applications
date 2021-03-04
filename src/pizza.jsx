import React from 'react';
export default function Pizza (props) {
    const { order, inputChange, checkChange, submit, disabled, errors} = props
const onSubmit = e => {
    e.preventDefault()
    submit()
}
const onCheckChange = e => {
    const {name, checked} = e.target
    checkChange(name, checked)
}
const onInputChange = e => {
    const {name, value} = e.target
    inputChange(name, value)
}
return (
    <form onSubmit={onSubmit}>
        <div>
            <h3>Create Your Pizza</h3>
            <button className='submitButton' disabled={disabled}>Submit Order</button>
            <div>{errors.name}</div>
        </div>
        <div>
            <label>Name&nbsp;
                <input
                    value={order.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                    />
            </label>
            <label>
                <select data-cy="size" name='size' onChange={onInputChange}>
                    <option  value='' select>--Pick a Size</option>
                    <option  value='medium'>Medium</option>
                    <option  value='large'>Large</option>
                    <option  value='xLarge'>Extra Large</option>
                </select>
            </label>
            <label> Pepperoni
                <input
                    type='checkbox'
                    name='pepperoni'
                    onChange={onCheckChange}
                    checked={order.toppings.pepperoni === true}
                    />
            </label>
            <label> Mushrooms
                <input
                    type='checkbox'
                    name='mushrooms'
                    onChange={onCheckChange}
                    checked={order.toppings.mushrooms === true}
                    />
            </label>
            <label> Onions
                <input
                    type='checkbox'
                    name='onions'
                    onChange={onCheckChange}
                    checked={order.toppings.onions === true}
                    />
            </label>
            <label> Olives
                <input
                    type='checkbox'
                    name='olives'
                    onChange={onCheckChange}
                    checked={order.toppings.olives === true}
                    />
            </label>
        </div>
    </form>
)
}