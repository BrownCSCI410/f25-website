import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}
const offset = -100; // Adjust this offset to match the height of your navbar or the amount you want to scroll up

export class Navbar extends React.Component<NavbarProps> {
    toggleNavbar = () => {
        const navbar = document.getElementById("navbar");
        if (navbar) {
            if (navbar.className === "nav-bar") {
                navbar.className += " responsive";
            } else {
                navbar.className = "nav-bar";
            }
        }
    };

    handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
        }
    };

    render() {
        return (
            <div>
                <nav className="nav-bar" id="navbar">
                    <button className="icon" onClick={this.toggleNavbar}>
                        &#9776;
                    </button>
                    <Link className="nav-link" to="/">CS 410</Link>
                    <Link className="nav-link" to="/lectures">Lectures</Link>
                    <Link className="nav-link" to="/labs">Discussion</Link>
                    <Link className="nav-link" to="/assignments">Assignments</Link>
                    <Link className="nav-link" to="/resources">Resources</Link>
                    <Link className="nav-link" to="/hours">Hours</Link>
                    <Link className="nav-link" to="/staff">Staff</Link>
                    <Link className="nav-link" to="/glossary">Glossary</Link>
                </nav>
            </div>
        );
    }
}