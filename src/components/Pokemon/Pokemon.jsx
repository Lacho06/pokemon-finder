import React from 'react'
import { useFetchPokemon } from './../../hooks/useFetchPokemon';


const Pokemon = ({ pokemon }) => {

    const { data, loading } = useFetchPokemon(pokemon)

    const { name, img, ability, number, weight, moves } = data

    return (
      <div className='d-flex flex-column col-12'>

        { loading && <p>Loading...</p> }

        <h1 className='h1 mx-auto font'>{name}</h1>
        <img src={img} alt={name} width="250" height="250" className='mx-auto my-2' />

        <div className="d-flex justify-content-around my-3">
            <p>Pokedex number: <span className='font font-bold'>{number}</span></p>
            <p>Weight: <span className='font font-bold'>{weight} kg</span></p>
        </div>  

        <p className='h4 mx-auto my-2'>Skills</p>
        <ul>
            {
                ability?.map((i, index) => {
                return <li key={index}><span className='font-bold'>{index+1}</span> - {i.name}</li>
                })
            }
        </ul>
        
        <p className='h4 mx-auto my-2'>Movements</p>

        <ul className="row my-4">
            {
                moves?.map((i, index)=>{
                return <li className='col-md-6 col-lg-3' key={index}><span className='font-bold'>{index+1}</span> - {i.name}</li>
                })
            }
        </ul>

      </div>
    )
}

export default Pokemon