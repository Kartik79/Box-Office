import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getShowbyId } from "../api/tvmaze";
import { useQuery } from '@tanstack/react-query'
import ShowMainData from "../Components/shows/ShowMainData";
import Details from "../Components/shows/Details";
import Seasons from "../Components/shows/Seasons";
import Cast from "../Components/shows/Cast";
import {Link} from "react-router-dom"

const Show=()=>{
    const {showId}=useParams()

    const {data:showdata,error:showerror}=useQuery({queryKey:['shows',showId], queryFn:()=>getShowbyId(showId)})
    if(showerror) {
        return <div>We have an error : {showerror.message}</div>
    }
    if(showdata) {
        return <div>

        <Link to="/">Go Back to Home</Link>

            <ShowMainData 
                image={showdata.image} 
                name={showdata.name} 
                rating={showdata.rating} 
                summary={showdata.summary} 
                genres={showdata.genres}/>
            <div>
                <h1>Details</h1>
                <Details
                    status={showdata.status}
                    premiered={showdata.premiered}
                    network={showdata.network}/>
            </div>
            <div>
                <h2>Seasons</h2>
                <Seasons seasons={showdata._embedded.seasons}/>
            </div>
            <div>
                <h2>Cast</h2>
                <Cast cast={showdata._embedded.cast}/>
            </div>
        </div>
    }
    return <div>Page loading</div>
}
export default Show