import React from 'react'

export default class Article extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.articleInfo.headline.main}</h5>
          <p className="card-text">{this.props.articleInfo.headline.main}</p>
        </div>
      </div>
    )
  }
}
