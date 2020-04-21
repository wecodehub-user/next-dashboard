import React, { useEffect } from 'react'
import { signOut } from '../utils/authentication'
import { useRouter } from 'next/router'

const LogoutPage = () => {
    const router = useRouter()
    useEffect(() => {
        signOut()
        router.replace('/login')
    }, [])
    return <div />
}

export default LogoutPage
