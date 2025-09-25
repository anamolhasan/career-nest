import Lottie from 'lottie-react'
import React from 'react'

import registerLottie from '../../assets/lottes/register.json'

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col gap-5 lg:flex-row-reverse">
    <div className="text-center lg:text-left">
       <Lottie style={{width:'250px'}} animationData={registerLottie} loop={true}/>
    </div>
    <div className="card  w-full max-w-sm shrink-0 ">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Register now!</h1>
        <form >
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='name' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Register