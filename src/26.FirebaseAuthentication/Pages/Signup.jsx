import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'
import './index.css'

const Signup = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate =useNavigate()

    async function handleLogin(e){
        e.preventDefault()
        try{
            const user = await createUserWithEmailAndPassword(auth,email,password)
            const user = userCredential.user
            const accessToken = await user.getIdToken()

            localStorage.setItem('accessToken', accessToken)
            alert('Users Sign in successfully')
              navigate('/home')
        }
        catch{
            console.log(error .message)
        }
    }

  return (
    <div className='login'>
        <form  className='form' onSubmit={handleLogin}>
            <h1> Login Here </h1>
            <input className='input' onChange={(e)=>setEmail(e.target.value)} type="email" name='email' placeholder='Enter your email' />
            <br />
            <input  className='input' onChange={(e)=>setPassword(e.target.value)} type="password" name='password' placeholder='Enter your password' />
            <br />
            <button className='btn1' type='submit'>Signup</button>
            <span>Already hava an account here?  <Link to ='/login'>Login </Link></span>
        </form>
     
    </div>
  )
}

export default Signup