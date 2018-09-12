import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTop: true
        };
    }

    render() {
        return (
            <nav
                className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top wow fadeIn`}
                role="navigation"
                style={{
                    transition: "opacity 0.3s ease-out",
                    WebkitTransition: "opacity 0.3s ease-out"
                }}
            >
                <div className="container" style={{ maxWidth: "100vw" }}>
                    <Link to="/" className="navbar-brand">
                        Bolt
                    </Link>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#exCollapsingNavbar"
                    >
                        &#9776;
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="exCollapsingNavbar"
                    >
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link to="/Quote" className="nav-link">
                                    Get A Quote
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Tracking" className="nav-link">
                                    Tracking
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Billing" className="nav-link">
                                    Billing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Account" className="nav-link">
                                    Account
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Help" className="nav-link">
                                    Help
                                </Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                            <div
                                className="btn-group"
                                style={{
                                    display: this.props.authenticated
                                        ? "block"
                                        : "none"
                                }}
                            >
                                <li className="nav-item order-2 order-md-1">
                                    <div
                                        className="dropdown-toggle nav-link"
                                        title="settings"
                                    >
                                        <i
                                            className="fa fa-cog fa-fw fa-lg"
                                            data-toggle="dropdown"
                                        />
                                        <ul className="dropdown-menu text-center effect1">
                                            <li className="dropdown-item">
                                                <Link to="/settings">
                                                    Profile Settings
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </div>
                            <li className="dropdown order-1">
                                <span id="userName">Bolty McBolterson</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
