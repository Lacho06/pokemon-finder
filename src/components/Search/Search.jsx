import { useState } from 'react'

const Search = ({ setPokemon }) => {


    const [inputValue, setInputValue] = useState('')


    const onChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmitListener = (e) => {
        e.preventDefault()

        if(inputValue.trim().length > 2){
            setPokemon(inputValue)
            setInputValue('')
        }

    }


    return (
        <form onSubmit={ onSubmitListener }>
            <input 
                type="text"
                name="search"
                autoComplete='off'
                placeholder='Search'
                className='form-control mx-auto my-auto'
                value={ inputValue }
                onChange={ onChange } />
        </form>
    )
}

export default Search
