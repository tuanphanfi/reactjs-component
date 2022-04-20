import React, { useState, useEffect, useMemo } from 'react';

import Button from '../../components/commons/Button';
import Input from '../../components/commons/Input';
import '../../components/assets/css/style.css'
import useCalculate from '../../untils/useCalculate'

const HomePage = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [loading, setLoading] = useState(false)

    let myName = '';
    let myAge = ''
    const handleChangeName = (e) => {
        myName = e.target.value
    }

    const handleChangeAge = (e) => {
        myAge = e.target.value
    }

    const removeData = () => {
        setTimeout(() => {
            setName('')
            setAge('')
            setLoading(false)
        }, 3000)

        setLoading(true)
    }

    const changeName = () => {
        setName(myName);
        setAge(myAge);
        setLoading(false)

    }

    const totalCalculate = useCalculate(age);

    // const memo = useMemo(() => computeExpensiveValue(a, b), [a, b]);

    return (
        <div className="wrapper">
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <br />
            <input type="number" onChange={(e) => setAge(e.target.value)} placeholder="Age" />


            {/* <h1>{loading}</h1> */}
            {/* loading */}
            {loading ? (
                <h1>Loading</h1>
            ) :
                <div>
                    <h1>Hello: {name}</h1>
                    <h1>Age: {age}</h1>
                    <h1>Double Age: {totalCalculate}</h1>
                </div>
            }
            <button className="removeDataHomePage" onClick={() => removeData()}>Remove Data</button>

            <button className="changeDataHomePage" onClick={() => changeName()}>Change Data</button>

            {/* <button onClick={test}></button> */}
            {/* <Button /> */}
        </div >
    );
};

export default HomePage;