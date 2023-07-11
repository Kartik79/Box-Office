import ShowGrid from "../Components/shows/ShowGrid";
import { getShowbyIds } from "../api/tvmaze";
import { useStarredShows } from "../lib/useStarredShows";
import { useQuery } from '@tanstack/react-query'


const Starred = () => {
  const  [starredShowsIds] =useStarredShows()
  const {data:starredshows,error:starredshowserror} = useQuery(
    {queryKey : ['starred', starredShowsIds],
    queryFn:async ()=>getShowbyIds(starredShowsIds).then(result=>result.map(show=>({show}))),
    refetchOnWindowFocus:false})

  if(starredshows?.length==0) {
    return <div>No Starred Shows</div>
  } 
  if(starredshows?.length>0) {
    return <ShowGrid shows={starredshows}/>
  } 
  if(starredshowserror) {
    return <div>Error occured: {starredshowserror.message}</div>
  }

  return <div>Shows are loading</div>
};
export default Starred;
