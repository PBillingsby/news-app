import React, { Component } from "react";

import Article from "./presentational/Article";
export default class NewsApi extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=43e0aaba37554f5fb646e6cde9f1f220"
    )
      .then(resp => resp.json())
      .then(newsArr => this.setState({ articles: newsArr.articles }));
  }

  render() {
    return (
      <div className="row">
        {this.state.articles.map(article => (
          <Article key={article.title} article={article} />
        ))}
      </div>
    );
  }
}
