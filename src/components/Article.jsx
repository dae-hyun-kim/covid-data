import React from 'react'

export default class Article extends React.Component {

  render() {
    const articleInfo = this.props.articleInfo
    console.log(articleInfo)
    return (
      <div className="card card-width m-3">
        <img src={`https://www.nytimes.com/${articleInfo.multimedia[6].url}`} className="card-img-top" alt="article"/>
        <div className="card-body">
          <h5 className="card-title">{articleInfo.headline.main}</h5>
          <p className="card-text">{articleInfo.headline.main}</p>
          <a href={articleInfo.web_url} target="blank">Learn More</a>
        </div>
      </div>
    )
  }
}
