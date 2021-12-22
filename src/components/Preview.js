import React, { Component } from 'react'

class Preview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, editBtn } = this.props;
    return (
      <div>
        <p>{name}</p>
        <button type='submit' onClick={editBtn}>Edit</button>
      </div>
    )
  }
}

export default Preview
