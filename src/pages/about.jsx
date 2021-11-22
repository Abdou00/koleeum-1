import React, { Component } from 'react';
import Query from "../components/query/query";
import ABOUT_PAGE_QUERY from "../queries/pages/about";
import Markdown from 'markdown-to-jsx';
import RegistrationForm from '../components/registration-form';


function About(props) {
    return (
        <Query query={ABOUT_PAGE_QUERY}>
            {({ data: { aboutUs } }) => {
                return (
                <div className="about-us fadeIn">
                    <div className="container">
                        <h1 className="title">{aboutUs.title}</h1>
                        <div className="text-content">
                            {aboutUs.text_content.map((paragraphe) =>
                                <div key={paragraphe.id} className="paragraphe">
                                    <Markdown options={{ wrapper: 'div', forceWrapper: true }}>{paragraphe.text}</Markdown>
                                </div>
                            )}
                        </div>
                        <div className="image">
                            <img src={aboutUs.image.url} />
                        </div>
                        <div className="infos">
                            <h2 className="title">Informations de contact</h2>
                            <div className="contact-links">
                                <p>{aboutUs.telephone}</p>
                                <p>{aboutUs.email}</p>
                            </div>
                        </div>
                        <div className="registration">
                            <div className="container">
                                <h2 className="title">{aboutUs.registration.title}</h2>
                                <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="description">{aboutUs.registration.description}</Markdown>
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

export default About