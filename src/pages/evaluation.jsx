import React, { Component } from 'react';
import Query from "../components/query/query";
import LOCATAIRES_PAGE_QUERY from "../queries/pages/locataires";
import Markdown from 'markdown-to-jsx';
import EvaluationForm from '../components/evaluation-form';

class Evaluation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          error: null,
          type:''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(props) {
        this.setState({
            type: props
        })
        document.querySelector('.cards').classList.add('fadeOut')
        setTimeout(() => {
            document.querySelector('.cards').classList.add('d-none')
        }, 750)
        document.querySelector('.evaluation-form').classList.add('fadeIn')
        document.querySelector('.evaluation-form').classList.add(props)
        // if (props == 'invest') {
        //     document.querySelector('#evaluationType').value = 'Investissement'
        // } else if (props == 'vente') {
        //     document.querySelector('#evaluationType').value = 'Vente'
        // } else {
        //     document.querySelector('#evaluationType').value = 'Gestion Locative'
        // }
      
    }

    render() {

        return (
            <Query query={LOCATAIRES_PAGE_QUERY}>
                {({ data: { locataire } }) => {
                    return (
                    <div className="evaluation fadeIn">
                        <div className="container">
                            <h1 className="title">{locataire.title}</h1>
                            <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{locataire.description}</Markdown>
                            <div className="cards">
                                <div className="card" onClick={() => this.handleClick("investissement")}>
                                    <img src="https://koleeum-bucket.s3.eu-west-3.amazonaws.com/prestations_298cab5807.svg" />
                                    <h2>Investissement & Asset Management</h2>
                                </div>
                                <div className="card" onClick={() => this.handleClick("vente")}>
                                    <img src="https://koleeum-bucket.s3.eu-west-3.amazonaws.com/prestations_298cab5807.svg" />
                                    <h2>Vente</h2>
                                </div>
                                <div className="card" onClick={() => this.handleClick("gestion_locative")}>
                                    <img src="https://koleeum-bucket.s3.eu-west-3.amazonaws.com/prestations_298cab5807.svg" />
                                    <h2>Gestion Locative</h2>
                                </div>
                            </div>
                            <EvaluationForm type={this.state.type}/>
                        </div>
                    </div>
                    );
                }}
            </Query>
        )

    }
}

export default Evaluation