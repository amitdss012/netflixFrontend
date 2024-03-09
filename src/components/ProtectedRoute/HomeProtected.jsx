import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const HomeProtected = ({children}) => {

    const user = useSelector((state) => state.userData.user)

    if(!user){
        return <Navigate to={"/login"} />
    }

    return children
}
