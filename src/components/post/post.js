import React from "react";
import { useParams } from "react-router";
import Query from "../query/query";
import Markdown from "markdown-to-jsx";
import Moment from "react-moment";

import POST_QUERY from "../../queries/posts/post";

const Post = () => {
    let { id } = useParams();

    return (
        <Query query={POST_QUERY} slug={id}>
            {({ data: { posts } }) => {
                if (posts.length) {
                  const imageUrl = process.env.NODE_ENV !== "development" ? posts[0].image.url : process.env.REACT_APP_BACKEND_URL + posts[0].image.url;

                    return (
                        <div className="post">
                            <div className="container">
                                <h1 className="title">{posts[0].title}</h1>

                                <div className="content">
                                    <Markdown>{posts[0].content}</Markdown>
                                    <p className="post-date">
                                        Publié le :&nbsp;
                                        <Moment format="DD/MM/YYYY">{posts[0].published_at}</Moment>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                }
            }}
        </Query>
    );
};

export default Post;