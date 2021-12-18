import React, { Component } from 'react'
import General from './components/General'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: '',
    }
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state)
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <General
            name={name}
            email={email}
            phone={phone}
            onInputChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default App


