import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "../components/posts/posts";
import Query from "../components/query/query";
import POSTS_QUERY from "../queries/posts/posts";
import BLOGPAGE_QUERY from "../queries/pages/blog";

const Blog = () => {
  document.getElementById('monsitemedia_social_wall').classList.remove('show')

  return (
      <div className="blog fadeIn">
        <div className="container">
          <Query query={BLOGPAGE_QUERY}>
            {({ data: { blog } }) => {
                return (
                  <>
                    <h1 className="title">{blog.title}</h1>
                    <p className="description">{blog.description}</p>
                  </>
                );
            }}
          </Query>
          <Query query={POSTS_QUERY}>
            {({ data: { posts } }) => {
                return <Posts posts={posts} />;
            }}
          </Query>
        </div>
      </div>
  );
};

export default Blog;