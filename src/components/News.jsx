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
    fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid-19&api-key=uVpWajpaGqoyuFGJZRUW7WEGCtqbDhD6")
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
        <Article articleInfo={article} key={index}/>
      )
    })
    return allArticles
  }
  render() {
    return (
      <div className="text-center mt-5 mb-5">
        <h2 className="headings">COVID-19 Related News</h2>
        {this.generateArticles()}
      </div>
    )
  }
}
