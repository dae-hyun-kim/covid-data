import React from 'react'

export default class News extends React.Component {

  componentDidMount() {
    fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=uVpWajpaGqoyuFGJZRUW7WEGCtqbDhD6")
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.log(result.response.docs)
    })
  }
  render() {
    return (
      <div className="text-center mt-5 mb-5">
        <h2 className="headings">COVID-19 Related News</h2>
      </div>
    )
  }
}
