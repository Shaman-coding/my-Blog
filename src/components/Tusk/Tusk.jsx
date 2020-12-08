import React from 'react';
import {TuskDom} from "./tuskDom";


export const Tusk = (props) => {


 let blockTusk = props.tusks.map(T => <TuskDom tusk={T.tusk}/>)


    let sendGols = () => {
        props.sendGols();
    } 

    let updateGols = (e) => {
        let updateTusk = e.target.value 
        props.updateGols(updateTusk)
    }

    return(
        <div className={'wrapperTusk'}>
            <div>
                <h2>Мои цели и планы</h2>
            </div>

            <div>
                <textarea onChange={updateGols} />            {/*  ref={myGols} onClick={sendGols} */}
                <button onClick={sendGols}> Send </button>   
            </div>
            <div>
                {blockTusk}
            </div>
        </div>
    )
}