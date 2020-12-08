import React from 'react';
import T from './myThink.module.css';
import {PostDom} from "./postDom/postDom";
import { Tusk } from '../Tusk/Tusk';

 const MyThink = (props) => {

     let addPost = () => {
         props.addPost();
     }

     let onPostChange = (e) => {
        let updateText = e.target.value
        props.onPostChange(updateText);
     }


    let postsDom = props.post
        .map(p => <PostDom message={p.message}/>)

    return (
        <div className={T.wrapperThink}>
           <h2 className={T.title}> Здесь я буду писать свои мысли и идеи </h2>

            <div className={T.mainBlock}>

                <textarea onChange={onPostChange}
                          value={props.addPostText}/>

                <button onClick={addPost}> Send </button>

            </div>

            <div>
                {postsDom}
            </div>

            <div className={'Tusk'}>

               <Tusk tusks={props.tusks}
                     sendGols={props.sendGols}
                     updateGols={props.updateGols} />
                   
            </div>
        </div>
    )
}

export default MyThink;