import { useState } from "react"
import { searchforshow } from "../api/tvmaze"

const Home =()=> {
    const [searchstr,setsearchstr]=useState("")
    const [apiData,setapiData]=useState(null)
    const [apiDataerror,setapiDataerror]=useState(null)

    const onSearchinputchange=(ev)=>{
        setsearchstr(ev.target.value)
    }
    const onSearch= async(ev)=>{
        ev.preventDefault()
        try {
            setapiDataerror(null)
            const result=await searchforshow(searchstr)
            setapiData(result)       
        }catch(Error) {
            setapiDataerror(Error)
        }
    }
    const renderapi=()=>{
        if(apiDataerror) {
            return <div>Error occured: {apiDataerror.message}</div>
        }
        if(apiData) {
            return (apiData.map((data)=>(
                <div key={data.show.id}>{data.show.name}</div>
            )))
        }
        return null
    }
    return <div>
        <form onSubmit={onSearch}>
        <input type="text" value={searchstr} onChange={onSearchinputchange}/>
        <button type="submit">Search</button>
        </form>
        <div>
            {renderapi()}
        </div>
    </div>
}
export default Home