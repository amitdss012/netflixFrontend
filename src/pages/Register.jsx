import React from 'react'
import SignUp from '../components/SignUp'
import toast, { Toaster } from 'react-hot-toast';

export const Register = () => {
  return (
    <>
    <SignUp />
    <Toaster />
    </>
  )
}
