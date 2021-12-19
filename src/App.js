import React, { Component } from 'react'
import Education from './components/Education';
import General from './components/General'
import Experience from './Experience';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: '',
      school: '',
      degree: '',
      studyDate: '',
      company: '',
      position: '',
      tasks: '',
      leaveDate: '',
    }
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state)
  };

  onEditForm = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  render() {
    const { name, email, phone } = this.state;
    const { school, degree, studyDate } = this.state;
    const { company, position, tasks, leaveDate } = this.state;
    return (
      <div>
        <form>
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
            tasks={tasks}
            leaveDate={leaveDate}
            onInputChange={this.handleChange}
          />
          <button type='submit' onClick={this.onEditForm}>Edit</button>
          <button type='submit' onClick={this.onSubmitForm}>Submit</button>
        </form>
        <p>{name} {email} {phone}</p>
        <p>{school} {degree} {studyDate}</p>
        <p>{company} {position} {tasks} {leaveDate}</p>
      </div>
    )
  }
}

export default App


