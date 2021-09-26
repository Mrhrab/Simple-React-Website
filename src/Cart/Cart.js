import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0; 
    for(const developer of cart){
        total = total + developer.workHours;
    }
    return (
        <div>
            <h2>Selected:- {props.cart.length} developer </h2><br />
                <h2>Total :- {total}K</h2> 
                <button className="button-cart">Hire Now!!!!</button>
        </div>
    );
};

export default Cart;