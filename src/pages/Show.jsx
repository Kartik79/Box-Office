import { useParams } from "react-router-dom"
import { getShowbyId } from "../api/tvmaze";
import { useQuery } from '@tanstack/react-query'
import ShowMainData from "../Components/shows/ShowMainData";
import Details from "../Components/shows/Details";
import Seasons from "../Components/shows/Seasons";
import Cast from "../Components/shows/Cast";
import {Link} from "react-router-dom"
import styled from 'styled-components';
import { TextCenter } from "../Components/common/TextCenter";


const Show=()=>{
    const {showId}=useParams()

    const {data:showdata,error:showerror}=useQuery({queryKey:['shows',showId], queryFn:()=>getShowbyId(showId), refetchOnWindowFocus:false})
    if(showerror) {
        return <div>We have an error : {showerror.message}</div>
    }
    if(showdata) {
        return <ShowPageWrapper>
            <BackHomeWrapper>
                <Link to="/">Go Back to Home</Link>
            </BackHomeWrapper>
                <ShowMainData 
                    image={showdata.image} 
                    name={showdata.name} 
                    rating={showdata.rating} 
                    summary={showdata.summary} 
                    genres={showdata.genres}/>
                <InfoBlock>
                    <h1>Details</h1>
                    <Details
                        status={showdata.status}
                        premiered={showdata.premiered}
                        network={showdata.network}/>
                </InfoBlock>
                <InfoBlock>
                    <h2>Seasons</h2>
                    <Seasons seasons={showdata._embedded.seasons}/>
                </InfoBlock>
                <InfoBlock>
                    <h2>Cast</h2>
                    <Cast cast={showdata._embedded.cast}/>
                </InfoBlock>
            </ShowPageWrapper>
    }
    return <TextCenter>Page loading</TextCenter>
}
export default Show

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;