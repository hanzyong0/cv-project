import React, { Component } from 'react'

class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: 'text'
    }
  }

  onFocus = () => {
    this.setState({
      type: 'date'
    });
  };

  onBlur = () => {
    this.setState({
      type: 'text'
    });
  };

  render() {
    const { school, degree, studyStartDate, studyEndDate, onInputChange } = this.props;
    return (
      <div className='form-control'>
        <p>Education</p>
        <div>
          <label htmlFor='school'></label>
          <input
            placeholder='School Name'
            type='text'
            id='school'
            value={school}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='degree'></label>
          <input
            placeholder='Title of Study'
            type='text'
            id='degree'
            value={degree}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='studyStartDate'></label>
          <input
            placeholder='Study Start Date'
            type={this.state.type}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            id='studyStartDate'
            value={studyStartDate}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='studyEndDate'></label>
          <input
            placeholder='Study End Date'
            type={this.state.type}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            id='studyEndDate'
            value={studyEndDate}
            onChange={onInputChange}
          />
        </div>
      </div>
    )
  }
}

export default Education;
