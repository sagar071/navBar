import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { Sidebar } from "./Sidebar";
import "./Menubar.css";

function Menubar() {
    const [sidebar, setsidebar] = useState(false);

    const showSidebar = () => setsidebar(!sidebar)
    return (
        <>
        <div className="container">
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <MenuIcon onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            
                            {/* <CloseIcon className="close-icon" /> */}
                        <MenuIcon className="close-icon"/>
                        </Link>
                    </li>
                    {Sidebar.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.icon}</span>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            
            </div>
        </>

    )
}

export default Menubar