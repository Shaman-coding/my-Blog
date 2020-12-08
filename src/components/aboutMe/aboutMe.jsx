import React from 'react';
import A from './aboutMe.module.css';
import PhotoDom from "./photoDom/photoDom";


 export const AboutMe = (props) => {

    let PhotoMaps = props.photo.map(P => <PhotoDom src={P.src}/>)

    return (
        <div className={A.wrapperAboutMe}>

            <div className={A.aboutMeWrapper}>

            </div>

            <div className={A.blockPhoto}>
                {PhotoMaps}
            </div>
        </div>
    )
}