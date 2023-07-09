const Seasons=({seasons})=> {
    return <div>
        <p>Seasons: {seasons.length}</p>
        <p>
            Episode: {seasons.reduce((sum,season)=>sum+season.episodeOrder,0)}
        </p>
        <div>
            {seasons.map(season=>(
                <div key={season.id}>
                    <p>Season {season.number}</p>
                    <p>Episodes: {season.episodeOrder}</p>
                </div>

            ))}
        </div>
    </div>
}
export default Seasons