import React, { Component } from 'react'
import Header from './components/Header';
import Education from './components/Education';
import General from './components/General'
import Experience from './components/Experience';
import Preview from './components/Preview';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preview: false,
      name: '',
      email: '',
      phone: '',
      school: '',
      degree: '',
      studyDate: '',
      company: '',
      position: '',
      leaveDate: '',
    }
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      preview: true
    });
    console.log(this.state);
  };

  onEditForm = (e) => {
    e.preventDefault();
    this.setState({
      preview: false
    });
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  render() {
    const { preview } = this.state;
    const { name, email, phone } = this.state;
    const { school, degree, studyDate } = this.state;
    const { company, position, leaveDate } = this.state;
    if (preview) {
      return (
        <div>
          <Header />
          <Preview
            name={name}
            editBtn={this.onEditForm}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <div className='main'>
            <form className='container' onSubmit={this.onSubmitForm}>
              <General
                name={name}
                email={email}
                phone={phone}
                onInputChange={this.handleChange}
              />
              <Education
                school={school}
                degree={degree}
                studyDate={studyDate}
                onInputChange={this.handleChange}
              />
              <Experience
                company={company}
                position={position}
                leaveDate={leaveDate}
                onInputChange={this.handleChange}
              />
              <button className='previewBtn' type='submit'>Preview</button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default App


