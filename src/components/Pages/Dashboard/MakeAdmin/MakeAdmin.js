import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

const MakeAdmin = () => {
    const { register, reset, handleSubmit } = useForm()

    const [email, setEmail] = useState('');
    console.log(email);
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdmin = data => {

        fetch('https://afternoon-beyond-26035.herokuapp.com/client/makeadmin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('admin add successfully')
                }
            })
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleSubmit(handleAdmin)}>
                <TextField
                    {...register('email')}
                    label="Email"
                    variant="standard"
                    type="email"
                    onBlur={handleOnBlur}
                ></TextField>
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;