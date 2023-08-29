const React = require('react')

function Show(props){
     const {pokemon} = props
     
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };
       
        const source = `${pokemon.img}.jpg`
    return(
        <main>
            <h1 style={myStyle}>Gotta Catch 'Em All</h1>
            <ul>                    
                        <div>
                        <h2>
                            {pokemon.name}
                        </h2>
                            <img  src={source}  alt={pokemon.name}/>
                            <a href={`/pokemon`}> Back</a> 
                            </div>
            </ul>
        </main>
    )
}

module.exports = Show;