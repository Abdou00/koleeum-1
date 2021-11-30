import React, { Component } from 'react';
import Query from "../components/query/query";
import PROPRIETAIRES_PAGE_QUERY from "../queries/pages/proprietaires";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Markdown from 'markdown-to-jsx';
import RegistrationForm from '../components/registration-form';

function Proprietaires(props) {
    document.getElementById('monsitemedia_social_wall').classList.remove('show')
    return (
        <Query query={PROPRIETAIRES_PAGE_QUERY}>
            {({ data: { proprietaire } }) => {
                return (
                <div className="proprietaires fadeIn">
                    <div className="container">
                        <h1 className="title">{proprietaire.title}</h1>
                        <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{proprietaire.description}</Markdown>
                        <Link className="btn" to={proprietaire.Call_to_action.link}>{proprietaire.Call_to_action.title}</Link>
                        <div className="sections">
                            <div key={proprietaire.first_section.id} className="section first-section">
                                <div className="image">
                                    <img src={proprietaire.first_section.image.url} />
                                </div>
                                <div className="txt-content">
                                    <h1 className="title">{proprietaire.first_section.title}</h1>
                                    <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{proprietaire.first_section.description}</Markdown>
                                </div>

                                <div className="cards">
                                    {proprietaire.first_section.cards.map((card) =>
                                        <div key={card.id} className="card">
                                            <div className="icon">
                                                <img src={card.icon.url} />
                                            </div>
                                            <div className="txt-content">
                                                <h1 className="title">{card.title}</h1>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {proprietaire.page_section.map((section) =>
                                <div key={section.id} className="section">
                                    <div className="image">
                                        <img src={section.image.url} />
                                    </div>
                                    <div className="txt-content">
                                        <h1 className="title">{section.title}</h1>
                                        <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{section.description}</Markdown>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="garanties">
                            <h2 className="title">{proprietaire.garanties.title}</h2>
                            <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{proprietaire.garanties.description}</Markdown>
                            <div className="logos">
                                {proprietaire.garanties.logos.map((logo) =>
                                    <div className="logo">
                                        <img src={logo.image.url} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="sections">
                            <div key={proprietaire.last_section.id} className="section">
                                <div className="image">
                                    <img src={proprietaire.last_section.image.url} />
                                </div>
                                <div className="txt-content">
                                    <h2 className="title">{proprietaire.last_section.title}</h2>
                                    <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{proprietaire.last_section.description}</Markdown>
                                </div>
                            </div>
                        </div>
                        <div className="registration">
                            <div className="container">
                                <h2 className="title">{proprietaire.registration.title}</h2>
                                <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{proprietaire.registration.description}</Markdown>
                                <RegistrationForm />
                            </div>
                        </div>
                    </div>
                </div>
                );
            }}
        </Query>
    )
    
}

export default Proprietaires