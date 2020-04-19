import React from 'react'

const Cards = (props) => {
  console.log(props.data)
  return(
    <div className="container d-flex justify-content-around">
      <div className="card card-size text-center">
        <div className="card-body">
          <h5 className="card-title">Confirmed</h5>
          <h6 className="card-subtitle mb-2 text-muted"># of Cases</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card card-size text-center">
        <div className="card-body">
          <h5 className="card-title">Recovered</h5>
          <h6 className="card-subtitle mb-2 text-muted"># of Cases</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card card-size text-center">
        <div className="card-body">
          <h5 className="card-title">Deaths</h5>
          <h6 className="card-subtitle mb-2 text-muted"># of Cases</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards;
