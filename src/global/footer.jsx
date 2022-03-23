import React from 'react';
import { Link } from "react-router-dom";
import ContactForm from '../components/contact-form';

class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        footerInfo: this.props.footerInfo,
        footerNav: this.props.footerNav,
        socialNetworks: this.props.socialNetworks
      };
    }

    linkClick() {
      window.scrollTo(0, 0);
    }

  
    render() {

        console.log(this.state.footerInfo)

        return (
          <footer className="footer">
            <div key={0} className="container">
              <div className="logo">
                  <img src={this.state.footerInfo.logo.url} />
                  <p className="logo-address">{this.state.footerInfo.address}</p>
                  <p className="logo-tel">{this.state.footerInfo.telephone}</p>
                  <a className="logo-email" href={"mailto:" + this.state.footerInfo.email}>{this.state.footerInfo.email}</a>
              </div>
              {this.state.footerNav.map((column, index) => 
                <div key={index} className="column">
                    <h3 className="title">{column.title}</h3>
                    <ul>
                    {/* {column.link.map((l, index) => 
                        <li key={index}>{l.title}</li>
                    )} */}
                    { column.link.map((l, index) => {
                      return (
                          <li key={index}>
                            <Link key={index} to={l.link} className="hvr-underline-from-left" onClick={this.linkClick}>{l.title}</Link>
                          </li>
                        )
                      }) 
                    }
                    </ul>
                </div>
              )}
              <ContactForm />
            </div>
            <div key={1} className="container">
              <div className="reseaux-sociaux">
                {this.state.socialNetworks.map((social, index) => 
                    <a key={index}><img alt="alternate-txt" src={social.icon.url} /></a>
                )}
              </div>
              <div className="copyright">
                <p>© koleeum.com - 2022</p>
              </div>
            </div>
          </footer>
      )
    }
}

export default Footer
