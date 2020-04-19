import React from "react"

const Header = (props) => {
    return (
      <div className="m-5 text-center header">
        <h1>{`COVID-19 Case Data Tracker`}</h1>
        <p>Updated: {new Date(props.lastUpdate).toDateString()}</p>
      </div>
    )
}

export default Header
