import React from 'react';
import H from './header.module.css';
import {NavLink} from 'react-router-dom'


export const Header = (props) => {
    return(
        <div className={H.wrapperHeader}>
            <div className={H.Nav}>
                <nav>
                    <NavLink activeClassName = {H.active} className={H.Link} to={'/mainPage'}>Главная страница</NavLink>
                    <NavLink activeClassName = {H.active} className={H.Link} to={'/aboutMe'}>Обо мне</NavLink>
                    <NavLink activeClassName = {H.active} className={H.Link} to={'/myThink'}>Мои мысли</NavLink>
                    
                </nav>
            </div>
        </div>
    )
}