import React from 'react'

const Saludo = (props) => {

    console.log('props', props);
    return (
        <div>
            <h2>Saludando a {props.persona} y tiene {props.edad} years old</h2>
        </div>
    )
}

export default Saludo
