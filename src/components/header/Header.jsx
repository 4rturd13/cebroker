import React, { Component } from "react";
import "./header.scss";
import Logo from "../../img/logo.svg";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img className="logo" src={Logo} alt="Logo" />
                <nav>
                    <ul>
                        <li>
                            <a href="">Features</a>
                        </li>
                        <li>
                            <a href="">Plans</a>
                        </li>
                        <li>
                            <a href="">
                                Organizations{" "}
                                <ion-icon name="caret-down-outline"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="">Browse courses</a>
                        </li>
                        <li>
                            <a href="">Support</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <a href="" className="sign-in">
                        Sign in
                    </a>
                    <a href="" className="trial">
                        7 day trial
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;
