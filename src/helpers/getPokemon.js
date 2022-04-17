export const getPokemon = async(p) =>{

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`)
    const data = await response.json().then()
    
    return data
}