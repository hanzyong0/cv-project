import React, { Component } from 'react'

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, phone, onInputChange } = this.props;
    return (
      <div>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone Number: </label>
          <input
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
