import React, { Component } from 'react';
import Header from './global/header'
import Footer from './global/footer'
import Home from './pages/home'
import logo from './logo.svg';

import './App.css';

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


      fetch("https://koleeum-admin.herokuapp.com/home")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            hero: result.hero
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
  }

  render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement…</div>;
    } else {
      return (
        <div className="App">
          <Header content={this.state.header} />
          <Home />
          <Footer footerInfo={this.state.footerInfo} footerNav={this.state.footerNav} socialNetworks={this.state.socialNetworks} />
        </div>
      );
    }



  }
}

export default App;
