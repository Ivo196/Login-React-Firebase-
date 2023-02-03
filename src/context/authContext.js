import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut,
        GoogleAuthProvider,
        signInWithPopup,
        sendPasswordResetEmail
    } from 'firebase/auth'
import {auth} from '../firebase'

export const authContext = createContext() //ejecutamos la funcion de React y la guardamos en una variable
//authContext es el que tiene el valor del user 

//Creamos un Hook, simplemente llamamos a useAuth y el me devuelve la informacion del usuario
export const useAuth = () => {
   const context = useContext(authContext)
    return context
}

// export function AuthProvider ({children}) {
//     const singup = (email, password) => { 
//      createUserWithEmailAndPassword(auth, email, password)
//     }

//     return(
//     <authContext.Provider value={{singup}}>
//         {children}
//     </authContext.Provider>
//     )
// }

export function AuthProvider ({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const singup =  (email, password) => { 
        try {
            createUserWithEmailAndPassword(auth, email, password)
            console.log('Se creo el usuario')

        } catch (error) {
            throw new Error(error.message)
            console.log(error.message)
        }
    }

    const login = async (email, password) => 
        signInWithEmailAndPassword(auth, email, password) //consulta con la BD si el email y password existen 
    
    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email )
    } 

        useEffect (() =>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser) =>{
           setUser(currentUser)
           setLoading(false)
    })
        return () => unsubcribe()
    },[])
    
    return(
    <authContext.Provider value={{singup, login, user, logout, loading, loginWithGoogle, resetPassword}}>
        {children}
    </authContext.Provider>
    )
}
