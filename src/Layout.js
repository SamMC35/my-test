import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout(){
    return (
        <><div className="container">
            <h1>Welcome to Sam's Writings</h1>
            <div className="top-bar">
                <Link to="/">Home</Link>
                <Link to="articles">Articles</Link>
                <Link to="about">About This Page</Link>
                
            </div>
        <Outlet />
        </div></>
    )
}

export default Layout;