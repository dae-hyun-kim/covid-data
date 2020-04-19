import React from 'react'

import { Cards, Chart, CountryPicker} from './components'
import { fetchData } from './api'
import Header from './components/Header'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }


  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData
    })
  }

  render() {
    const data = this.state.data;
    const confirmedData = data.confirmed
    const recoveredData = data.recovered
    const deathsData = data.deaths
    return (
      <div className="container">
        <div>
          <Header/>
        </div>
        <div >
          <Cards confirmed={confirmedData} recovered={recoveredData} deaths={deathsData}/>
        </div>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}

export default App
