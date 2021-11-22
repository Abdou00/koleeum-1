import React, { Component } from 'react';
import Query from "../components/query/query";
import LOCATAIRES_PAGE_QUERY from "../queries/pages/locataires";
import Markdown from 'markdown-to-jsx';
import RegistrationForm from '../components/registration-form';

function Locataires(props) {
    document.getElementById('monsitemedia_social_wall').classList.remove('show')
    return (
        <Query query={LOCATAIRES_PAGE_QUERY}>
            {({ data: { locataire } }) => {
                return (
                <div className="locataires fadeIn">
                    <div className="container">
                        <h1 className="title">{locataire.title}</h1>
                        <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{locataire.description}</Markdown>
                        <div className="sections">
                            {locataire.page_sections.map((section) =>
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
                        <div className="choose-us">
                            <div className="container">
                                <div className="image">
                                    <img src={locataire.choose_us.image.url} />
                                </div>
                                <div className="text-content">
                                    <h2 className="title">{locataire.choose_us.title}</h2>
                                    <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{locataire.choose_us.description}</Markdown>
                                    <div className="sections">
                                        {locataire.choose_us.card.map((card) =>
                                            <div key={card.id} className="section">
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
                            </div>
                        </div>
                        <div className="registration">
                            <div className="container">
                                <h2 className="title">{locataire.registration.title}</h2>
                                <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{locataire.registration.description}</Markdown>
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

export default Locataires