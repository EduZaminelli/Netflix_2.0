import React from "react";
import './Header.css';

export default function Header({ dark }) {
    return (
        <header className={dark ? "dark" : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src= "../netflix_logo.png" alt="logo"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="../avatar.png" alt="avatar"/>
                </a>
            </div>
        </header>
    )
}