import { SearchCard } from "../common/SearchCard"

const ActorCard=({country,name,image,birthday,deathday,gender})=>{
    return <SearchCard>
        <img src={image} />
        <h1>{name} {!!gender && `(${gender})`}</h1>

        <p>{country?`Comes from ${country}`:'No Country'}</p>

        {!!birthday && <p>Born {birthday}</p>}
        <p>{deathday?`Died: ${deathday}`:'Alive'}</p>
        </SearchCard>
}
export default ActorCard