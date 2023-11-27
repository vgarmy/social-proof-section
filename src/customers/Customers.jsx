import React from 'react'
import './customer.css'
import dataCustomer from './dataCustomer'

const listCustomer = dataCustomer.map(dataCustomer =>

    <div className='box_customer_card'>
        <div className="box_customer_card_user">
            <img src={dataCustomer.img} alt="avatar" />
            <div className='box_customer_card_user_info'>
                <p className='box_customer_card_user_info_name'>{dataCustomer.name}</p>
                <p className='box_customer_card_user_info_status'>{dataCustomer.status} Buyer</p>
            </div>
        </div>
        <p className='box_customer_card_qoute'>
            {dataCustomer.quote}
        </p>
    </div>
);


const Customers = () => {
    return (
        <div className="box_customer">
            {listCustomer}
        </div>
    )
}

export default Customers