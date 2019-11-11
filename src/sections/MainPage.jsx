import React, { useState, useEffect } from 'react';
import Main from './main/Main'
import Header from './header/Header'
import Footer from './footer/Footer'

const MainPage = () => {

    // const [count, setCount] = useState(0)
    // let prod = JSON.parse(localStorage.getItem('count')) || 0;
    // useEffect(() => {

    //     setCount(prod)
    // }, [prod])

    return (
        <>
            <Header
                // count={count}
                // setCount={setCount}
            />
            <Main />
            <Footer />
        </>
    )
}
export default MainPage;