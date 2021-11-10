import React from 'react';
import Hero from '../sections/hero'
import Skills from '../sections/skills'
import Services from '../sections/services'
import Prestations from '../sections/prestations'
import Newsletter from '../sections/newsletter'

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
    }

    componentDidMount() {
        fetch("https://koleeum-admin.herokuapp.com/home")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                hero: result.hero,
                expertises: result.expertise,
                services: result.services,
                prestations: result.prestations,
                newsletter: result.newsletter
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
            <div className="home fadeIn">
                <Hero content={this.state.hero} />
                <Skills content={this.state.expertises} />
                <Services content={this.state.services} />
                <Prestations content={this.state.prestations} />
                <div><div id='monsitemedia_newsletter_wall'></div></div>
                <Newsletter content={this.state.newsletter} />
            </div>
          );
        }
        
    }

}

export default Home