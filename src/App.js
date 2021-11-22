import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Header from './global/header'
import Footer from './global/footer'
import Home from './pages/home'
import Locataires from './pages/locataires';
import Rgpd from './pages/rgpd'
import Legal from './pages/legal'
import Honoraires from './pages/honoraires'
import Blog from './pages/blog'
import Article from "./components/post/post";
// import logo from './logo.svg';

import './App.css';
import Proprietaires from './pages/proprietaires';
import About from './pages/about';
import Evaluation from './pages/evaluation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      header: {},
      footerInfo: {},
      footerNav: [],
      socialNetworks: []
    };
  }

  componentDidMount() {
    fetch("https://koleeum-admin.herokuapp.com/global")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            header: result.header,
            footerInfo: result.footer_informations,
            footerNav: result.footer_navigation,
            socialNetworks: result.social_network
          });

        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

      document.body.classList.add('applicatif')

  }

  render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="loading"><div className="lds-dual-ring"></div></div>;
    } else {
      return (
        <div className="App">
          <Router>
            <Header content={this.state.header} />
            <div className="layout fadeIn">
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/proprietaires" exact component={Proprietaires} />
                  <Redirect from="/post/proprietaires" to="/proprietaires" />
                  <Route path="/locataires" exact component={Locataires} />
                  <Redirect from="/post/locataires" to="/locataires" />
                  <Route path="/qui-sommes-nous" exact component={About} />
                  <Redirect from="/post/qui-sommes-nous" to="/qui-sommes-nous" />
                  <Route path="/rgpd" exact component={Rgpd} />
                  <Redirect from="/post/rgpd" to="/rgpd" />
                  <Route path="/mentions-legales" exact component={Legal} />
                  <Redirect from="/post/mentions-legales" to="/mentions-legales" />
                  <Route path="/honoraires" exact component={Honoraires} />
                  <Redirect from="/post/honoraires" to="/honoraires" />
                  <Route path="/blog" exact component={Blog} />
                  <Redirect from="/post/blog" to="/blog" />
                  {/* <Route path="/post/:id" component={Post} exact /> */}
                  <Route path="/post/:id" children={<Article />} />
                  <Route path="/evaluation" exact component={Evaluation} />
              </Switch>
            </div>
            <Footer footerInfo={this.state.footerInfo} footerNav={this.state.footerNav} socialNetworks={this.state.socialNetworks} />
            <CookieConsent
              location="bottom"
              buttonText="J'accepte"
              cookieName="myRGPDCookie"
              style={{ background: "#4270ED" }}
              buttonStyle={{ backgroundColor: "#FFF", color: "#4270ED", fontSize: "16px", borderRadius: "20px", padding: "5px 25px" }}
              expires={150}
              debug={false}
              className="cookie-consent"
            >
              <p>This website uses cookies to enhance the user experience.</p>
              <Link to='#'>En savoir plus</Link>
            </CookieConsent>
          </Router>
        </div>
      );
    }



  }
}

export default App;
