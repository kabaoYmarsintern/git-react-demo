import React from "react";

export class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar=default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="navbar-nav">
                           <li> <a href="#todoContainer">TodoContainer</a></li>
                        </ul> 
                    </div>
                    
                </div>
            </nav>
        )
    }
}
export default Header;