import React, { useState, useEffect } from 'react';

import Button from '../../components/commons/Button';
import Input from '../../components/commons/Input';
import '../../components/assets/css/style.css'
const HomePage = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [loading, setLoading] = useState('')

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
            setLoading('')
        }, 3000)

        setLoading('Loading')
    }

    const changeName = () => {
        setName(myName);
        setAge(myAge);
        setLoading('')

    }
    return (
        <div className="wrapper">
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <br />
            <input type="number" onChange={(e) => setAge(e.target.value)} placeholder="Age" />

            <h1>Hello: {name}</h1>
            <h1>Age: {age}</h1>

            <h1>{loading}</h1>
            <button className="removeDataHomePage" onClick={() => removeData()}>Remove Data</button>

            <button className="changeDataHomePage" onClick={() => changeName()}>Change Data</button>

            {/* <Button /> */}
        </div>
    );
};

export default HomePage;