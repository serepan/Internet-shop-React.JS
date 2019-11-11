import React, { useEffect, useState } from 'react';
import '../scss/App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const CartIcon = () => {

    const [count, setCount] = useState('0')

    useEffect(() => {
        let prod = JSON.parse(localStorage.getItem('count')) || 0;
        setCount(prod)
    }, [count])

    return (

        <>
            <Link to='/Cart' className="cart"></Link>
            <span className="cart_count">{count}</span>
        </>

    )
}

export default CartIcon;