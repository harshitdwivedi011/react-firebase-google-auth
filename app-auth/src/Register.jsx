import React, { useEffect, useState } from 'react'
import './Register.css';
import { auth } from './firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getRedirectResult, signInWithRedirect, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        getRedirectResult(auth)
            .then((result) => {
                if (result.user) {
                    navigate('/');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [navigate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(result.user, { displayName: user });
            console.log(result);
            setEmail('');
            setPassword('');
            setUser('');
            navigate('/');
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleSignInGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
            .catch((error) => {
                console.error(error);
            });

    }
    return (
        <div className='register-container'>
            <p className="title">Registration Form</p>
            <form className='register-form' onSubmit={handleSubmit}>
                <input className='text-fields' type="text" placeholder='Enter Name' onChange={e => setUser(e.target.value)} value={user} />
                <input className='text-fields' type='password' placeholder='Enter Password' onChange={e => setPassword(e.target.value)} value={password} />
                <input className='text-fields' type="email" placeholder='Enter Email' onChange={e => setEmail(e.target.value)} value={email} />
                <button type="submit" className='register-user'>Register</button>
            </form>
            <button type="submit" className='google-signIn' onClick={handleSignInGoogle}>Sign in With Google</button>
        </div>
    )
}

export default Register
