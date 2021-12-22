import React, { Component } from 'react'

class Experience extends Component {
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
    const { company, position, leaveDate, onInputChange } = this.props;
    return (
      <div className='form-control'>
        <p>Work Experience</p>
        <div>
          <label htmlFor='company'></label>
          <input
            placeholder='Company Name'
            type='text'
            id='company'
            value={company}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='position'></label>
          <input
            placeholder='Position Title'
            type='text'
            id='position'
            value={position}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='leaveDate'></label>
          <input
            placeholder='Date you left the company'
            type={this.state.type}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
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
