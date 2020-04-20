import React from 'react'

export default class Search extends React.Component {

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.log(result)
    })
  }
  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}
