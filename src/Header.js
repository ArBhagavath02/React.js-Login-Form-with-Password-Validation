import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const correctPassword = '12345';  // Define the correct password for verification

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if the password is correct
        if (password === correctPassword) {
            setIsLoggedIn(true);  // Set login state to true
            setErrorMessage('');   // Clear any error messages
        } else {
            setErrorMessage('Invalid username or password');  // Set error message
            setIsLoggedIn(false);  // Ensure login state is false
        }
    };

    // If the user is logged in, show a success message
    if (isLoggedIn) {
        return (
            <div style={styles.successContainer}>
                <h1>We are happy to have you!</h1>
            </div>
        );
    }

    // If not logged in, show the login form
    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>
                <h2 style={styles.heading}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        required
                    />
                    {errorMessage && <p style={styles.error}>{errorMessage}</p>}
                    <button type="submit" style={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
    },
    loginBox: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#28a745',
        border: 'none',
        color: 'white',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        fontSize: '14px',
        textAlign: 'center',
    },
    successContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '24px',
        fontWeight: 'bold',
    },
};

export default Login;
