import React from 'react'
import Article from './Article'

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
    this.generateArticles = this.generateArticles.bind(this)
  }

  componentDidMount() {
    fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=coronavirus-19&api-key=uVpWajpaGqoyuFGJZRUW7WEGCtqbDhD6")
    .then(response => {
      return response.json()
    })
    .then(result => {
      this.setState({
        articles: result.response.docs
      })
    })
  }

  generateArticles() {
    const articles = this.state.articles;
    const allArticles = articles.map((article, index) => {
      return(
        <div key={index}>
          <Article articleInfo={article}/>
        </div>
      )
    })
    return allArticles
  }
  render() {
    return (
      <div className="text-center mt-5 mb-5">
        <h1 className="headings mb-5">COVID-19 Related News</h1>
        <div className="d-flex flex-wrap justify-content-around">
          {this.generateArticles()}
        </div>
      </div>
    )
  }
}
