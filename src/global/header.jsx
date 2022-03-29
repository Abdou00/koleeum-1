import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        toggleOpen: false
      };
      // Cette liaison est nécéssaire afin de permettre
      // l'utilisation de `this` dans la fonction de rappel.
      this.handleClick = this.handleClick.bind(this);
      this.linkClick = this.linkClick.bind(this);
    }

    handleClick() {
      this.setState(state => ({
        toggleOpen: !state.toggleOpen
      }));
    }

    linkClick() {
      window.scrollTo(0, 0);
      if(window.innerWidth <= 425  && this.state.toggleOpen == true) {
        this.setState(state => ({
          toggleOpen: !state.toggleOpen
        }));
      }
    }
  
    render() {
        return (
          <header className="header">
            <div className="container">
              <div className="logo">
                  <Link to="/" onClick={this.linkClick}><img src={this.props.content.logo.url} /></Link>
                  <button id="burger" onClick={this.handleClick} className={this.state.toggleOpen ? 'open' : ''}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
              </div>
              <nav className={this.state.toggleOpen ? 'nav open' : 'nav'}>
                  { this.props.content.navigation.map((navlink, index) => {
                    return (
                        <Link key={index} to={navlink.link} className="hvr-underline-from-left" onClick={this.linkClick}>{navlink.title}</Link>
                      )
                    }) 
                  }
              </nav>
              <div className="my-account">
                  <Link to={this.props.content.button.link} className="btn">{this.props.content.button.title}</Link>
              </div>
            </div>
          </header>
      )
    }
}

export default Header
