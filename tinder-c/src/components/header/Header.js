import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import logo from './assets/logo.png'

function Header() {
    return (
        <div className='header'>
        <IconButton>
        <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>

        <img className="header__logo"
        src={logo}
        alt="logo"
        />

        

        
                         
            

        </div>
    )
}

export default Header
