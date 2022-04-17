import React, {Fragment, useState} from 'react'
import Pokemon from './../Pokemon/Pokemon';
import Search from './../Search/Search';
import './App.css'


const App = () => {

   const [pokemon, setPokemon] = useState('')


    return (
        <Fragment>
            <div className="container-fluid grid-layout">

                <div className="container content">
                    <div className="row mt-3 mx-3 d-lg-flex">
                        <div className="col-12 col-lg-8 mb-3 my-lg-auto d-flex">
                            <h2 className='h2 mx-auto my-auto'>P<span className='text-danger'>o</span>k<span className='text-warning'>e</span>m<span className='text-danger'>o</span>n</h2>
                        </div>
                        <div className="col-12 col-lg-4 d-flex flex-column">
                            <Search setPokemon={ setPokemon } />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <Pokemon pokemon={ pokemon }/>
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