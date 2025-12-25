import React, { use } from 'react'
import { AuthContext } from '../context/Auth/AuthContext'
import { Navigate, useLocation } from 'react-router'
import Loading from '../page/shared/Loading'

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation()
    console.log(location)

     // 🔄 auth loading থাকলে কিছু দেখাবে না / spinner
    if(loading){
        return <Loading />;
    }
  
      // 🔐 user না থাকলে login page এ পাঠাবে
    if(!user){
       return <Navigate to={'/signIn'} state={location.pathname}/>
    }

      // ✅ user থাকলে protected page দেখাবে
    return children
}

export default PrivateRoute