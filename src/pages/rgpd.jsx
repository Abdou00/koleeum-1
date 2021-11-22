import React, { Component } from 'react';
import Query from "../components/query/query";
import RGPD_PAGE_QUERY from "../queries/pages/rgpd";
import Markdown from 'markdown-to-jsx';

function Rgpd(props) {
    document.getElementById('monsitemedia_social_wall').classList.remove('show')
    return (
        <Query query={RGPD_PAGE_QUERY}>
            {({ data: { rgpd } }) => {
                return (
                <div className="rgpd fadeIn">
                    <div className="container">
                        <h1 className="title">{rgpd.title}</h1>
                        <Markdown options={{ wrapper: 'div', forceWrapper: true }} className="text-content">{rgpd.content}</Markdown>
                    </div>
                </div>
                );
            }}
        </Query>
    )
}

export default Rgpd