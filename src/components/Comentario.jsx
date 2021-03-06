import React from 'react'
import Imagen from './Imagen'

const Comentario = ({urlImg,persona,texto}) => {
   
    return (
        <div className ="media mt-2">
            <Imagen urlImg={urlImg}/>
            <div className="media-body">
                <h5 className="mt-0">{persona}</h5>
               {texto}
            </div>
        </div>
    )
}

export default Comentario
