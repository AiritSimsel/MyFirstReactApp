import React from 'react'
import Logo from '../img/logo192.png'


export function Header(props) {     
    return (
        <div className='header'>
            <div className='leftSide'><img src={Logo} alt='React logo'/></div>
            <div className='rightSide'><a href={props.page}>My GitHubPage</a></div>            
        </div>
    )
};


