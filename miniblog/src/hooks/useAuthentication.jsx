import {
    getAuth,
    createUserWithEmailAndPassaword,
    signInWithEmailAndPassaword,
    updateProfile,
    signout
}from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthetication = () =>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanUp
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }
}