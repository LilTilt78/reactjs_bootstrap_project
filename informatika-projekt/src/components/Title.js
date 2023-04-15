import React from 'react'

const Title = (props) => {
    console.log(props)
    return (
        <div className='dummyClass'>
            <h1>Zadání č.3 - {props.name}</h1>
        </div>
    )
}

export default Title