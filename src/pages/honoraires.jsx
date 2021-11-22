import React, { Component } from 'react';
import Query from "../components/query/query";
import HONORAIRES_PAGE_QUERY from "../queries/pages/honoraires";
import Markdown from 'markdown-to-jsx';

function Rgpd(props) {
    document.getElementById('monsitemedia_social_wall').classList.remove('show')
    return (
        <Query query={HONORAIRES_PAGE_QUERY}>
            {({ data: { honoraire } }) => {
                return (
                <div className="honoraires fadeIn">
                    <div className="container">
                        <h1 className="title">{honoraire.title}</h1>
                        <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="text-content">{honoraire.content}</Markdown>
                    </div>
                </div>
                );
            }}
        </Query>
    )
}

export default Rgpd