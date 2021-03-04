import React from 'react';

function NewOrder({order}){
    if (!order) {
        return <h3> We are setting up your order</h3>
    }
    return (
        <div>
            <h2>{order.name}</h2>
            <p>{order.size}</p>
            {!!order.toppings &&
            <div> Your Toppings:
                <ul>
                    {order.toppings.map((topping, idx) => <li key={idx}>{topping}</li>
                    )}
                </ul>
            </div>
            }
            <p>{order.specialInstructions}</p>
        </div>
    )
}
export default NewOrder