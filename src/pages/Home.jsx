import { useState } from "react"

const Home =()=> {
    const [searchstr,setsearchstr]=useState("")
    const onSearchinputchange=(ev)=>{
        setsearchstr(ev.target.value)
    }
    const onSearch= async(ev)=>{
        ev.preventDefault()
        const response=await fetch(`https://api.tvmaze.com/search/shows?q=${searchstr}`)
        const body=await response.json()
        console.log(body)
    }
    return <div>Home Page
        <form onSubmit={onSearch}>
        <input type="text" value={searchstr} onChange={onSearchinputchange}/>
        <button type="submit">Search</button>
        </form>
    </div>
}
export default Home