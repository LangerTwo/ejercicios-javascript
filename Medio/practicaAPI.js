fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
        if(!response.ok){
            throw new Error('Error en la petición')
        }
        return response.json();
    })
    .then(data => {
        data.results.forEach(poke => {
            // Para cada Pokémon, haz otra petición a la URL del Pokémon
          fetch(poke.url)
            .then(response => response.json())
            .then(pokemonData => {
                console.log(`Nombre: ${pokemonData.name}`)
                console.log(`Altura: ${pokemonData.height}`)
                console.log(`Peso: ${pokemonData.weight}`)
                console.log(`Habilidades: ${pokemonData.abilities.map(ability => ability.ability.name).join(', ')}`)
                console.log(`Tipos: ${pokemonData.types.map(type => type.type.name).join(', ')}`)
                console.log(`---`)
            })
            .catch(error => console.error('Error al obtener detalles del Pókemon:', error))
        });
    })
    .catch(error => {
        console.error('Hubo un problema con la petición: ', error)
    })