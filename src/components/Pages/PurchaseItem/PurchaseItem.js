import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const PurchaseItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('https://afternoon-beyond-26035.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Ordered Successfully');
                    reset()
                }
            })
    };

    return (
        <div>
            <div className="service">
                <h2>Order From Here</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("email")} placeholder="Email" />
                    <textarea {...register("address")} placeholder="Address" />
                    <input type="number" {...register("number")} placeholder="Number" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default PurchaseItem;