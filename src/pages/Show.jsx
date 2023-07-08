import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getShowbyId } from "../api/tvmaze";

const useShowById=(showId)=> {
    const {showdata,setshowdata} = useState(null)
    const {showerror, setshowerror} = useState(null)

    useEffect(()=>{
        async function FetchData() {
            try {
                const data=await getShowbyId(showId)
                setshowdata(data)
            } catch(err) {
                setshowerror(err)
            }
        }
        FetchData()
    },[showId])
    return {showdata,showerror}
}

const Show=()=>{
    const {showId}=useParams()
    const {showdata,showerror} = useShowById(showId)

    if(showerror) {
        return <div>We have an error : {showerror.message}</div>
    }
    if(showdata) {
        return <div>Got show data : {showdata.name}</div>
    }
    return <div>Page loading</div>
}
export default Show