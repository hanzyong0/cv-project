import React, { Component } from 'react'

class Education extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { school, degree, studyDate, onInputChange } = this.props;
    return (
      <div>
        <div>
          <label htmlFor='school'>School Name: </label>
          <input
            type='text'
            id='school'
            value={school}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='degree'>Title of Study: </label>
          <input
            type='text'
            id='degree'
            value={degree}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='studyDate'>Study Date: </label>
          <input
            type='date'
            id='studyDate'
            value={studyDate}
            onChange={onInputChange}
          />
        </div>
      </div>
    )
  }
}

export default Education;
