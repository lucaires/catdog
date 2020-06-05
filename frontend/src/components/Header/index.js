import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import logo from '../../assets/logo22.png';
import camera from '../../assets/camera.svg';

export default function Header() {
    return (
        <div className="Nav">
            <div className="main-header">
                <div className="header-content">
                    <Link to="/">
                        <img src={logo} alt="Instagram Clone" />
                    </Link>
                    <Link to="/new">
                        <img src={camera} alt="Enviar publicação" />
                    </Link>
                </div>
            </div>
        </div>
    );
}