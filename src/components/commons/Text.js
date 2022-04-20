import React, { useState, useEffect } from 'react';



const Text = () => {
    // hook //khai báo state
    const [name, setName] = useState('Tuan')
    const [age, setAge] = useState('27')

    useEffect(() => {
        console.log("Chay vao day")
        setName("Tuan2")
        setAge(30)
        callApi()
    }, []) //truyen [] này vào, nó sẽ không render nhiêu lần.

    // useEffect(() => {
    //     myFunc()
    // }, [a, b]) // a or b is changed, myFunc() will run.

    const callApi = () => {
        setTimeout(() => {
            setName("TuanTuan")
        }, 3000)
    }

    // always be rendered()
    const hello = () => {
        console.log("function hello")
    } 

    return (
        <div>
            Hello, {name}, {age} years old.
        </div>
    );
};


export default Text;