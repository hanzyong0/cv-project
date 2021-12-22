import React, { Component } from 'react'

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, phone, onInputChange } = this.props;
    return (
      <div className='form-control'>
        <p>Personal Information</p>
        <div>
          <label htmlFor='name'></label>
          <input
            placeholder='Name'
            type='text'
            id='name'
            value={name}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='email'></label>
          <input
            placeholder='Email'
            type='email'
            id='email'
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='phone'></label>
          <input
            placeholder='Phone Number'
            type='tel'
            id='phone'
            value={phone}
            onChange={onInputChange}
          />
        </div>
      </div>
    );
  };
};

export default General;
