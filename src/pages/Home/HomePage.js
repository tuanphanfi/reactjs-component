import React, { useState, useEffect, useMemo } from 'react';

import Button from '../../components/commons/Button';
import Input from '../../components/commons/Input';
import '../../components/assets/css/style.css'

import useCalculate from '../../untils/useCalculate'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required("Name should be required please").min(2).max(18),
    age: yup.number().required("Age should be required please").positive().integer().min(18).max(120),
    email: yup.string().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
})

const HomePage = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })


    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [loading, setLoading] = useState(false)

    const submitForm = (data) => {
        setTimeout(() => {
            setName('')
            setAge('')
            setLoading(false)
        }, 1000)
        setValue("name", '')
        setValue("age", '')
        setLoading(true)
        console.log(data)
    }
    // const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();

    const removeData = () => {
        setTimeout(() => {
            setName('')
            setAge('')
            setLoading(false)
        }, 500)
        setValue("fullName", '')
        setValue("age", '')
        setLoading(true)
    }


    const onSubmit = (data) => {
        setTimeout(() => {
            setName('')
            setAge('')
            setLoading(false)
        }, 1000)
        setValue("fullName", '')
        setValue("age", '')
        setLoading(true)
        console.log(data)
    }

    const totalCalculate = useCalculate(age);

    // const memo = useMemo(() => computeExpensiveValue(a, b), [a, b]);

    return (
        <div className="container-fluid text-center m-0 p-0">
            <div className="wrapper pt-4">
                <form action="" onSubmit={handleSubmit(submitForm)}>
                    <input
                        className=""
                        type="text"
                        name="name"
                        placeholder="Name..."
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <p className="text-danger">{errors.name?.message}</p>

                    <input
                        className="m-1"
                        type="number"
                        name="age"
                        placeholder="Age"
                        {...register('age', { required: true })}
                    />
                    <p className="text-danger">{errors.age?.message}</p>


                    <div className="buttons-homepage">
                        <button className="removeDataHomePage" onClick={() => removeData()}>Clear</button>
                        <button className="changeDataHomePage" type="submit" >Submit Data</button>
                    </div>
                    {/* {errors.age && <span>This field is required</span>} */}

                </form>

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

            </div >
        </div>
    );
};

export default HomePage;