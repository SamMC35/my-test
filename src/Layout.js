import React from "react";
import { Outlet } from "react-router-dom";

function Layout(){
    return (
        <><div className="container">
            <h1>Welcome to Sam's Writings</h1>
            <div className="top-bar">
                <a href="/">Home</a>
                <a href="/articles">Articles</a>
                <a href="/about">About This Page</a>
                
            </div>
        <Outlet />
        </div></>
    )
}

export default Layout;