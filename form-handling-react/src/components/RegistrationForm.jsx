import React from 'react'
import {useState} from 'react'

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[errors, setErrors] =useState({})

    const handleUsernameChange = (e)=> {
        setUsername(e.target.value);
    }
    const handleEmailChange =(e)=> {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e)=> {
        setPassword(e.target.value);
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        
        if (!username) {
            setErrors('Username Required!');
            return;
        }  
        if (!email) {
            setErrors('Email Required!');
            return;
        }
        if (!password) {
            setErrors('Passwor Required!');
            return;
        }        
    }

    return (

    <form onSubmit={handleSubmit}>

        <div>
            <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
        />
            {errors.username && <span>{errors.username}</span>}
        </div>
        
        <div>
            <input 
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Email'
        />
            {errors.email && <span>{errors.email}</span>}
        </div>
        
        <div>
            <input 
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
        />
            {errors.password && <span>{errors.password}</span>}
        </div>

        <button type='submit'>Submit</button>
        
    </form>
    )
}

export default RegistrationForm