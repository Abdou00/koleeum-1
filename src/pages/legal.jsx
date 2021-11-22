import React, { Component } from 'react';
import Query from "../components/query/query";
import LEGAL_PAGE_QUERY from "../queries/pages/legal";
import Markdown from 'markdown-to-jsx';

function Legal(props) {
    document.getElementById('monsitemedia_social_wall').classList.remove('show')
    return (
        <Query query={LEGAL_PAGE_QUERY}>
            {({ data: { legal } }) => {
                return (
                <div className="legal fadeIn">
                    <div className="container">
                        <h1 className="title">{legal.title}</h1>
                        <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="text-content">{legal.content}</Markdown>
                    </div>
                </div>
                );
            }}
        </Query>
    )
}

export default Legal