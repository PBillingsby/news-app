import React from "react";

const Article = props => {
  console.log(props);
  const {
    title,
    author,
    description,
    content,
    url,
    publishedAt
  } = props.article;
  return (
    <div className="w-25 m-2 border border-light">
      <h4>{title}</h4>
      <sub>
        by {author} for {props.article.source.name} -
        {publishedAt.substring(0, 10).split("")}
      </sub>
      <p>{description}</p>
      <a className="btn btn-primary" href={url} target="_blank" role="button">
        View Article
      </a>
    </div>
  );
};

export default Article;
