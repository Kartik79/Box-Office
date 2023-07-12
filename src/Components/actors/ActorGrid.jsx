import { FlexGrid } from "../common/FlexGrid"
import ActorCard from "./ActorCard"

const ActorGrid=({actors})=>{
    return <FlexGrid>{actors.map(data=>(
        <ActorCard
            key={data.person.id}
            country={data.person.country?data.person.country.name:null}
            name={data.person.name}
            image={data.person.image?data.person.image.medium:"/not-found.png"}
            birthday={data.person.birthday}
            deathday={data.person.deathday}
            gender={data.person.gender}
        />
    ))}
</FlexGrid>
}
export default ActorGrid