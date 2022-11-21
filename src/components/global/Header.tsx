import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light p-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    JobNavi
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Menu />
                </div>
            </div>
        </nav>
    );
};

export default Header;
