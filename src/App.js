import React from 'react'

import { Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchData } from './api'

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
    const data = this.state.data
    return (
      <div className="container">
        <div >
          <Cards data={data}/>
        </div>
        <CountryPicker/>
        <Chart/>
      </div>
    )
  }
}

export default App
