import { useEffect, useState } from 'react'
import { getPokemon } from '../helpers/getPokemon'

export const useFetchPokemon = (initialValue) => {

    const [value, setValue] = useState({
        data: {
            name: '',
            img: '',
            ability: [],
            number: 0,
            weight: 0,
            moves: []
        },
        loading: true
    })

    useEffect(
        () => {
            getPokemon(initialValue).then(
                (data) => {
                    setValue({
                        data: {
                            name: data.name,
                            img: data.sprites?.front_default,
                            ability: data.abilities?.map(i=>i.ability),
                            number: data.order,
                            weight: data.weight,
                            moves: data.moves?.map(i=>i.move),
                        },
                        loading: false 
                    })
                    console.log(value)
                }
            )
            
        }, [initialValue]
    )

    
    return value

}
