import {useState, useEffect} from 'react'
const usePersistedState=(initialState,sessionStorageKey) =>{
    const [state,setstate]=useState(()=>{
        const persistedValue=localStorage.getItem(sessionStorageKey)
        
        return persistedValue ? JSON.parse(persistedValue) : initialState
    })
    useEffect(()=>{
        sessionStorage.setItem(sessionStorageKey,JSON.stringify(state))
    },[state,sessionStorageKey])   
    return [state,setstate]
}
export const useSearchStr=()=>{
    return usePersistedState('','searchString')
}