import React from "react";

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
                    <a className="nav-link" href="/">CS 410</a>
                    <a className="nav-link" href="/lectures" >Lectures</a>
                    <a className="nav-link" href="/labs">Discussion</a>
                    <a className="nav-link" href="/assignments">Assignments</a>
                    <a className="nav-link" href="/resources">Resources</a>
                    <a className="nav-link" href="/hours">Hours</a>
                    <a className="nav-link" href="/staff">Staff</a>
                    <a className="nav-link" href="/glossary">Glossary</a>
                </nav>
            </div>
        );
    }
}
