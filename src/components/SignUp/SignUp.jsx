import React from 'react'
import './SignUp.css'
function SignUp() {
  return (
    <div className='SignUp'>
      <div className='SignUp__img'>

      </div>
      <div className='SignUp__info'>
        <p className='SignUp__text'>SIGN UP</p>
        <input className='SignUp__telnum' type="number" placeholder='+998901234567' />
        <input className='SignUp__telnum' type="number" placeholder='+998901234567' />
        <button className='SignUp__btn' onClick={console.log("ok")}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp