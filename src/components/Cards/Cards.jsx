import React from 'react'
import CountUp from 'react-countup'

const Cards = (props) => {
  const confirmed = props.confirmed;
  const recovered = props.recovered;
  const deaths = props.deaths;
  if (!confirmed || !recovered || !deaths) {
    return null
  } else {
    return (
      <div className="container d-flex justify-content-around">
        <div className="text-center">
          <h2 className="headings heading-border">Confirmed</h2>
          <h3 className="confirmed"><CountUp start={0} end={confirmed.value} duration={1.5} separator="," /></h3>
        </div>
        <div className="text-center">
          <h2 className="headings heading-border">Recovered</h2>
          <h3 className="recovered"><CountUp start={0} end={recovered.value} duration={1.5} separator="," /></h3>
        </div>
        <div className="text-center">
          <h2 className="headings heading-border">Deaths</h2>
          <h3 className="deaths"><CountUp start={0} end={deaths.value} duration={1.5} separator="," /></h3>
        </div>
      </div>
    )
  }
}

export default Cards;
