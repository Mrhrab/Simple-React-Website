import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Data.css'


const Data = (props) => {
    // console.log(props)
    const {name,greeting, picture, workHours, phone, email } = props.developer;
    const coffee = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className="card-container">
            <div>
                <img src={picture} alt="" />
                 <h2>Name: {name}</h2>
                 <h3>Salary: {workHours}k</h3>
                 <h4>Phone: {phone}</h4>
                 <h4>Email: {email}</h4>
                 <p>{greeting}</p>
                 <button onClick={() => props.handleAddToCart(props.developer)}>Hire ME!!!</button>
                 <br />
                 <p>Tip us a-{coffee}</p>

            </div>
        </div>
    );
};

export default Data;