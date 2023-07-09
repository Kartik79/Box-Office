import { Link } from "react-router-dom"

const ShowCard=({name,image,id,summary})=>{
    const summarystripped=summary?summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g,''):"No Description"
    return <div>
        <img src={image} />
        <h1>{name}</h1>
        <p>{summarystripped}</p>
        <div>
            <a href={`/show/${id}`} target="_blank" rel="noreferrer">Read more</a>
            <button type="button">Star Me</button>
        </div>
        </div>
}
export default ShowCard