import React, {Fragment, useState, useEffect} from 'react'

import './App.css'
import Search from './../Search/Search';
import Pokemon from './../Pokemon/Pokemon';


const App = () => {

    const [pokemon, setPokemon] = useState([])

    const [search, setSearch] = useState({
        value: '',
        loading: true,
        error: true
    })

    const {value, loading, error} = search

    const getPokemon = async(p) =>{

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`)
        await response.json().then(
            (data)=>{
                const results = [
                    data.name,
                    data.sprites.front_default,
                    data.abilities?.map(i => i.ability),
                    data.order,
                    data.weight,
                    data.moves?.map(i => i.move)
                ]
                setPokemon(results)
                setSearch({...search, loading: false, error: false})
            }
        ).catch((e)=>{
            setSearch({...search, loading:true, error: true})
            setPokemon([])
        })
    }

    useEffect(() => {
        getPokemon(value)
    }, [value])


    const show = () =>{

        if(loading === true && error === false){

            return (
                <p>Loading...</p>
            )


        }else if(loading === true && error === true){

            return (
                <p>No results found for this search</p>
            )


        }else{

            return (

                <Pokemon name={pokemon[0]} 
                    img={pokemon[1]}
                    ability={pokemon[2]} 
                    number={pokemon[3]} 
                    weight={pokemon[4]} 
                    moves={pokemon[5]} />

            )


        }

    }


    return (
        <Fragment>
            <div className="container-fluid grid-layout">

                <div className="container content">
                    <div className="row mt-3 mx-3 d-lg-flex">
                        <div className="col-12 col-lg-8 mb-3 my-lg-auto d-flex">
                            <h2 className='h2 mx-auto my-auto'>P<span className='text-danger'>o</span>k<span className='text-warning'>e</span>m<span className='text-danger'>o</span>n</h2>
                        </div>
                        <div className="col-12 col-lg-4 d-flex flex-column">
                            <Search text={value} onChange={({target})=> {
                                setSearch({value: target.value, loading, error})
                            }} />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">

                            {
                                show()
                            }

                            
                        </div>
                    </div>
                </div>

                <div className="row footer">
                    <footer className="col-12 bg-dark text-white d-flex flex-column p-3">
                        <p className='text-center'>This site has developed by <a href='https://github.com/Lacho06/' className='text-warning'>Lacho06dev</a>, follow me if you have a new feature</p>
                    </footer>
                </div>

            </div>

        </Fragment>
    )
}

export default App