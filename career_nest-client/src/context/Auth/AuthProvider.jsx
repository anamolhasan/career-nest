import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'
import axios from 'axios'

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    // signIn With Google
    const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
      setLoading(true)
      return signOut(auth)
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
        // if(currentUser?.email){
        //   const userData = {email: currentUser.email};
        //   axios.post('https://career-nest-server-psi.vercel.app/jwt', userData, {
        //     withCredentials:true
        //   })
        //     .then(res => {
        //       console.log('token after jwt',res.data)
        //     })
        //     .catch(err => console.log(err))
        // }
        console.log('user in the auth state change', currentUser)
      })
      return () => {
        unSubscribe()
      }
    },[])


    const authInfo  = {
        loading,
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }
  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider