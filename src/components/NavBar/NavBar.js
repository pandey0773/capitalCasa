import React from 'react';
import './NavBar.css'
// import { Container } from './styles';

function NavBar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light navBar tool" >
                    <div className='mat-toolbar-row'>
                        <div className="logo">
                            <img src='homeLogo.png'></img>
                            Capital Casa
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <div className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></div>
                                <div className="nav-item nav-link" >Features</div>
                                <div className="nav-item nav-link" >Pricing</div>
                                <div className="nav-item nav-link disabled" >Disabled</div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBar;