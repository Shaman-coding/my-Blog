import React from 'react';
import D from './postDom.module.css';



export const PostDom = (props) => {
    return(
        <div className={D.postDom}>
           <div>
               <p>{props.message}</p>
           </div>

            <div className={D.deleteBlock}>
                <button>Delete</button>
            </div>
        </div>
    )
}

