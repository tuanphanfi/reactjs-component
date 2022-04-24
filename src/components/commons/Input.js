import React from 'react';
import { useForm } from "react-hook-form";
const Input = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div>
            <label htmlFor="">Usernamne</label>
            <input type="text"
                placeholder=""
                {...register("exampleRequired", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
        </div>

    );
};

export default Input;