import React from 'react'

import { Cards, Chart} from './components'
import { fetchData } from './api'
import Header from './components/Header'
import News from './components/News'

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
    const confirmedData = data.confirmed;
    const recoveredData = data.recovered;
    const deathsData = data.deaths
    return (
      <div className="container">
        <div>
          <Header lastUpdate={data.lastUpdate}/>
        </div>
        <div >
          <Cards confirmed={confirmedData} recovered={recoveredData} deaths={deathsData}/>
        </div>
        <div>
          <h2 className="headings text-center mt-5 mb-3">COVID-19 Global Cases</h2>
          <Chart />
        </div>
        <div>
          <News/>
        </div>
      </div>
    )
  }
}

export default App
