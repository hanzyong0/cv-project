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
    const { school, degree, studyDate, onInputChange } = this.props;
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
          <label htmlFor='studyDate'></label>
          <input
            placeholder='Study Date'
            type={this.state.type}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
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