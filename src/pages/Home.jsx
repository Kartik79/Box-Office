import { useState } from 'react';
import { searchforshow } from '../api/tvmaze';
import { searchforpeople } from '../api/tvmaze';
import SearchForm from '../Components/SeachForm';
import ShowGrid from '../Components/shows/ShowGrid';
import ActorGrid from '../Components/actors/ActorGrid';

const Home = () => {
  const [apiData, setapiData] = useState(null);
  const [apiDataerror, setapiDataerror] = useState(null);

  
  
  const onSearch = async ({q,searchoption}) => {
    try {
      setapiDataerror(null);
      let result
      if(searchoption==='shows') {
        result = await searchforshow(q);
      } else{
        result = await searchforpeople(q);
      }
      setapiData(result);
    } catch (Error) {
      setapiDataerror(Error);
    }
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
