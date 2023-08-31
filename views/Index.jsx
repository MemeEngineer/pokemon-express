const React = require('react')

function Index(props){
     const {pokemon} = props
     
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };
    return(
        <main>
            
            <h1 style={myStyle}>See All the Pokemon!</h1>
            <nav>
    <a href="/pokemon/new">Add a New Pokemon</a>
</nav>
            <ul>
                {pokemon.map((monster,i) => {
                    return(
                        <li key={monster._id}>
                            The
                            <a href={`/pokemon/${monster._id}`} style={{textTransform: 'capitalize'}}> {monster.name}</a> 
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

module.exports = Index;