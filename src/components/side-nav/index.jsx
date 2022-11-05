import './styles.css';
import React, { useState } from 'react';
import Img from "../../assets/css/logo/logo.svg"
import Home from '../../assets/images/Home.png'
import Cars from '../../assets/images/Cars.png'
import Avatar from '../../assets/images/Avatar.png'
const Header = () => {

    const [collapse, setCollapse] = useState(true);
    const HandleCollapse = () => {
        setCollapse(!collapse);
    };


    return (
        <>
            {/* Navbar */}
            <div className="navigation">
                <div className="logo"></div>
                <div className="navigation-icon">
                    <img src={Home} alt="" />
                </div>
                <div className="navigation-icon">
                    <img src={Cars} alt="" />
                </div>
            </div>

            <div className="container">
                <div className={collapse ? "sidebar sidebar-show" : "sidebar"}>
                    <h4 className="mx-3 text-muted" >Dashboard</h4>
                    <div className='mx-3 bg-light bg-gradient'>
                        <h4 className='menu-klik'>Dashboard</h4>
                    </div>
                </div>
                <div className={collapse ? "content content-show " : "content"}>
                </div>
            </div>

            {/* Header */}
            <div className="header">
                <a className="navbar-brand" href="#tes">
                    <img src={Img} alt="Bootstrap" width="70" height="24" />
                </a>
                <div className="toggle" onClick={() => HandleCollapse()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M3 18H21"
                            stroke="#151515"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 12H21"
                            stroke="#151515"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 6H21"
                            stroke="#151515"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="space-header" />
                <div>
                    <div className="input-group">
                        <div className="form-outline">
                            <input id="search-input" type="search" placeholder='search' className="form-control" />
                        </div>
                        <button id="search-button" type="button" className="btn btn btn-outline-primary">
                            search
                        </button>
                    </div>
                </div>
               <div className='avatar'>
                    <img src={Avatar} alt="a" />
               </div>
                <div>
                    <div className="dropdown">
                        <button className="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            AdeSug
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                            <li><a className="dropdown-item" href="#tes">Log Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="content">
                <div className="main">
       
                    <h1>Dashboard isi</h1>
                </div>
            </div>

        </>

    )
}

export default Header;