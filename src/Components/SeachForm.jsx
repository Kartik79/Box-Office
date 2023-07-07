import { useState } from "react";
const SearchForm=({onSearch})=> {
    const [searchstr, setsearchstr] = useState('');
    const [searchoption,setsearchoption]=useState('shows')

    const onSearchinputchange = ev => {
        setsearchstr(ev.target.value);
      };
      const onradiochange=ev=>{
        setsearchoption(ev.target.value)
      }
      const onSubmit=ev=>{
        ev.preventDefault()
        const options= {
            q:searchstr,
            searchoption
        }
        onSearch(options)
      }
    return (<div>
        <form onSubmit={onSubmit}>
          <input type="text" value={searchstr} onChange={onSearchinputchange} />
          <label>
            Shows
            <input type='radio' name='search-option' value='shows' checked={searchoption==='shows'} onChange={onradiochange}/>
          </label>
          <label>
            Actors
            <input type='radio' name='search-option' value='actors' checked={searchoption==='actors'} onChange={onradiochange}/>
          </label>
          <button type="submit">Search</button>
        </form>
      </div>)
}
export default SearchForm