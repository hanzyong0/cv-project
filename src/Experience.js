import React, { Component } from 'react'

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company, position, tasks, leaveDate, onInputChange } = this.props;
    return (
      <div>
        <div>
          <label htmlFor='company'>Company Name: </label>
          <input
            type='text'
            id='company'
            value={company}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='position'>Position Title: </label>
          <input
            type='text'
            id='position'
            value={position}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='tasks'>Main Tasks of Job: </label>
          <input
            type='text'
            id='tasks'
            value={tasks}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='leaveDate'>Date you left the company: </label>
          <input
            type='date'
            id='leaveDate'
            value={leaveDate}
            onChange={onInputChange}
          />
        </div>
      </div>
    )
  }
}

export default Experience;
