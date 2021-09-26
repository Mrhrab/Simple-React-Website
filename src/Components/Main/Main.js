import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Data from '../Data/Data';
import './Main.css'

const Main = () => {
     const [developers, setDeveloper] = useState([]);

     const [cart, setCart] = useState([]);


     useEffect(() => {
         fetch('./fakeData.json')
         .then(res => res.json())
         .then(data =>setDeveloper(data))
     }, [])

       
    const handleAddToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
    }

    return (
       
        <div className="main-container">
            <div className="card-container">
                {
                    developers.map(developer => <Data 
                        key={developer.name}
                        developer={developer}
                        handleAddToCart={handleAddToCart}>
                           

                        </Data>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Main;