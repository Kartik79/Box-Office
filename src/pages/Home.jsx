import { useState } from 'react';
import { searchforshow } from '../api/tvmaze';
import { searchforpeople } from '../api/tvmaze';
import SearchForm from '../Components/SeachForm';
import ShowGrid from '../Components/shows/ShowGrid';
import ActorGrid from '../Components/actors/ActorGrid';
import { useQuery } from '@tanstack/react-query'

const Home = () => {
  const [filter,setfilter] = useState(null)
  const {data:apiData,error:apiDataerror} = useQuery(
    {queryKey : ['search', filter],
    queryFn:()=>filter.searchoption==='shows'
      ?searchforshow(filter.q)
      :searchforpeople(filter.q),
    enabled:!!filter,
    refetchOnWindowFocus:false})
  

  
  
  const onSearch = async ({q,searchoption}) => {
    setfilter({q,searchoption})
  };
  const renderapi = () => {
    if (apiDataerror) {
      return <div>Error occured: {apiDataerror.message}</div>;
    }
    if(apiData?.length==0){
      return <div>No Results</div>
    }
    if (apiData) {
      return apiData[0].show ? <ShowGrid shows={apiData}/>:<ActorGrid actors={apiData}/>
    }
    return null;
  };
  return ( <div>
    <SearchForm onSearch={onSearch}/>
    <div>{renderapi()}</div>
    </div>
  );
};
export default Home;
