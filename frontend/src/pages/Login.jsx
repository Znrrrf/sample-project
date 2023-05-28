import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()

    const handleLogin = () => {

        axios.post('http://localhost:5000/auth/login',{
            email,
            password
        })
        .then((result) => {
            console.log(result.data.result);
            localStorage.setItem("userData", JSON.stringify(result.data.result))
            navigation('/')
        }).catch((err) => {
            console.log(err);
        });

    }

    return (
        <div>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' id='email'value={email} onChange={(e) => setEmail(e.target.value)}/>
                <FormHelperText>We'll never share your email.</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <Button onClick={() => handleLogin()}>Login</Button>
        </div>
    )
}

export default Login
