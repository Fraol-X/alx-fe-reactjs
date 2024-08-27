import {useState} from 'react'; 

const RegistrationForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username) {
            setError('Username Required!');
            return;
        } 
        
        if (!email) {
            setError('Email Required!');
            return;
        }

        if (!password) {
            setError('Passwor Required!');
            return;
        }

        setError('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>

                <label>Username:</label>
                <input
                    type= 'text'
                    value= {username}
                    onChange={(e) => setUsername(e.target.value)}
                />

            </div>

            <div>

                <label>Email:</label>
                <input
                    type= 'email'
                    value= {email}
                    onChange= {(e) => setEmail(e.target.value)}
                />

            </div>

            <div>

                <label>Password</label>
                <input
                    type='password'
                    value= {password}
                    onChange = {(e) => setPassword(e.target.value)}
                />

            </div>

            {error && <p style={{ backgroundColor: 'red', color: 'white'}}>{error}</p>}
            <button type= 'submit'>Register</button>
            
        </form>
    );
};

export default RegistrationForm; 