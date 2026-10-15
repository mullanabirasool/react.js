import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'
import './index.css'

const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

      async function handleLogin(e){
        e.preventDefault()
        try{
          //   const user = await signInWithEmailAndPassword(auth,email,password)
          //   const user = userCredential.user
          //   const accessToken = await user.getIdToken()

          //  localStorage.setItem('accessToken', accessToken)
           console.log(user)
           alert('Users logged in successfully')
              navigate('/home')
        }
        catch (error) {
        console.log(error.message); // now error is defined
  }
       }
  return (
    <div className='login'>
        <form  className='form' onSubmit={handleLogin}>
            <h1> Login Here </h1>
            <input className='input' onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name='email' placeholder='Enter your email' />
            <br />
            <input  className='input' onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name='password' placeholder='Enter your password' />
            <br />
            <button className='btn1' type='submit'>Login</button>
            <span>Don't hava an account?  <Link to='/signup'>Sign Up </Link></span>
        </form>
     
    </div>
  )
}

export default Login