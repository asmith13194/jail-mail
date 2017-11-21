import React from 'react'

import axios from 'axios'

class Environment extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount () {
    axios.get('/environment').then( response => {
      console.log('componentDidMount/get/success', response)
      this.setState({environment: response.data})
    } )
  }

  render() {
    return(
      <div>
      {
        this.state.environment ?
        <pre>
          { JSON.stringify(this.state.environment, null, 2) }
        </pre>
        :
        null
      }

      </div>
    )
  }
}

export default Environment
