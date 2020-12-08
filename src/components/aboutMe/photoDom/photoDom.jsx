import React from 'react';

const PhotoDom = (props) => {


    return(
        <div>
            <img src={ props.src } alt="Photo"/>
        </div>
    )
}

export default PhotoDom;