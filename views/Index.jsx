const React = require('react')

function Index(props){
     const {pokemon} = props
     console.log(pokemon)
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };
    return(
        <main>
            
            <h1 style={myStyle}>Sell All the Pokemon!</h1>
            <ul>
                {pokemon.map((monster,i) => {
                    return(
                        <li key={i}>
                            The
                            <a href={`/pokemon/${i}`} style={{textTransform: 'capitalize'}}> {monster.name}</a> 
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

module.exports = Index;