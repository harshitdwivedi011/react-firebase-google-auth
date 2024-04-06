import React from 'react'
import { auth } from './firebase'
import './Register.css'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        await signOut(auth).then(
            console.log("SignOut successful"),
            navigate('/register')
        )
    }
    return (
        <div>
            Welcome {auth?.currentUser.displayName}
            <button type="submit" className='sign-out' onClick={handleSignOut}>Sign Out</button>
        </div>
    )
}

export default Home
