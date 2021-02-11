import { useState } from 'react';
import axios from 'axios';


const Modal = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const projectID = '7b43b98f-75f8-426a-85b6-2769578d6e3c';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject} );
   
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

            setError('');
        } catch (err) {
            setError('Oops, incorrect login credentials.');

        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required  />
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required  />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error"></h2>
                </form>
            </div>
        </div>
    )
}

export default Modal;