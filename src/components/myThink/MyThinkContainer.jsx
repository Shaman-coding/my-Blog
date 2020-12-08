import React from 'react';
import { addPostActionCreator, addTuskActionCreator, updateAddText, updateTuskText } from '../store/redusers/myThinkReduser';
import MyThink from './myThink';



 const MyThinkContainer = (props) => {

    
    let State = props.Store.getState();
     
                  //For myThink

     let addPost = () => {
         props.Store.dispatch(addPostActionCreator())
     }

     let onPostChange = (updateText) => {
       props.Store.dispatch(updateAddText(updateText))
    }
                    //For Tusk

    let sendGols = () => {
        props.Store.dispatch(addTuskActionCreator());
    } 

    let updateGols = (updateTusk) => {
        props.Store.dispatch(updateTuskText(updateTusk))
    }


    return(  <MyThink //For myThink
                      post={State.ThinkPage.posts}
                      addPostText={State.ThinkPage.addPostText}
                      addPost={addPost}
                      onPostChange={onPostChange}
                        //For Tusk
                      tusks={State.ThinkPage.tusks}
                      sendGols={sendGols}
                      updateGols={updateGols}
                     


                      
                      
    /> )
        
  
}

export default MyThinkContainer;