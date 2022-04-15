import React from 'react'

const Search = ({ text = '', onChange }) => {

    return (
        <>
            <input 
                type="text"
                name="search"
                autoComplete='off'
                placeholder='Search'
                className='form-control mx-auto my-auto'
                value={text}
                onChange={onChange} />
        </>
    )
}

export default Search
