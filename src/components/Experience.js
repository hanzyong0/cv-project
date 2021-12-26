import React, { Component, useState } from 'react'

// Class Component
// class Experience extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       type: 'text'
//     }
//   }

//   onFocus = () => {
//     this.setState({
//       type: 'date'
//     });
//   };

//   onBlur = () => {
//     this.setState({
//       type: 'text'
//     });
//   };

//   render() {
//     const { company, position, leaveDate, onInputChange } = this.props;
//     return (
//       <div className='form-control'>
//         <p>Work Experience</p>
//         <div>
//           <label htmlFor='company'></label>
//           <input
//             placeholder='Company Name'
//             type='text'
//             name='company'
//             value={company}
//             onChange={onInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor='position'></label>
//           <input
//             placeholder='Position Title'
//             type='text'
//             name='position'
//             value={position}
//             onChange={onInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor='leaveDate'></label>
//           <input
//             placeholder='Date you left the company'
//             type={this.state.type}
//             onFocus={this.onFocus}
//             onBlur={this.onBlur}
//             name='leaveDate'
//             value={leaveDate}
//             onChange={onInputChange}
//           />
//         </div>
//       </div>
//     )
//   }
// }

// export default Experience;

// Functional Component
const Experience = (props) => {
  const [type, setType] = useState('text');

  const onFocus = () => {
    setType('date');
  };

  const onBlur = () => {
    setType('text')
  };

  const { company, position, leaveDate, onInputChange } = props;
  return (
    <div className='form-control'>
      <p>Work Experience</p>
      <div>
        <label htmlFor='company'></label>
        <input
          placeholder='Company Name'
          type='text'
          name='company'
          value={company}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label htmlFor='position'></label>
        <input
          placeholder='Position Title'
          type='text'
          name='position'
          value={position}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label htmlFor='leaveDate'></label>
        <input
          placeholder='Date you left the company'
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          name='leaveDate'
          value={leaveDate}
          onChange={onInputChange}
        />
      </div>
    </div>
  )
}

export default Experience;