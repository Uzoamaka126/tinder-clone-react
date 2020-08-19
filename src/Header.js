import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/icons/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export function Header({ backButton }) {
    const history = useHistory();

    return (
        // We are using BEM
        <div className="header">
            { backButton ? (

             <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon 
                    className="header__icon" 
                    fontSize="large" 
                />
            </IconButton>
            ): (

            <IconButton>
                <PersonIcon 
                    className="header__icon" 
                    fontSize="large" 
                />
            </IconButton>
            )}
            <Link to="/">
                <img
                    className="header__tlogo" 
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                    alt="tinder logo" 
                />
            </Link>
            <IconButton>
                <ForumIcon 
                    className="header__icon" 
                    fontSize="large" 
                />
            </IconButton>
        </div>
    )
}