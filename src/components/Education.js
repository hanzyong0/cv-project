import React, { Component, useState } from 'react'

// Class Component
// class Education extends Component {
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
//     const { school, degree, studyStartDate, studyEndDate, onInputChange } = this.props;
//     return (
//       <div className='form-control'>
//         <p>Education</p>
//         <div>
//           <label htmlFor='school'></label>
//           <input
//             placeholder='School Name'
//             type='text'
//             name='school'
//             value={school}
//             onChange={onInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor='degree'></label>
//           <input
//             placeholder='Title of Study'
//             type='text'
//             name='degree'
//             value={degree}
//             onChange={onInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor='studyStartDate'></label>
//           <input
//             placeholder='Study Start Date'
//             type={this.state.type}
//             onFocus={this.onFocus}
//             onBlur={this.onBlur}
//             name='studyStartDate'
//             value={studyStartDate}
//             onChange={onInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor='studyEndDate'></label>
//           <input
//             placeholder='Study End Date'
//             type={this.state.type}
//             onFocus={this.onFocus}
//             onBlur={this.onBlur}
//             name='studyEndDate'
//             value={studyEndDate}
//             onChange={onInputChange}
//           />
//         </div>
//       </div>
//     )
//   }
// }

// export default Education;

// Functional Component
const Education = (props) => {
  const [type, setType] = useState('text');

  const onFocus = () => {
    setType('date');
  }

  const onBlur = () => {
    setType('text');
  }

  const { school, degree, studyStartDate, studyEndDate, onInputChange } = props;
  return (
    <div className='form-control'>
      <p>Education</p>
      <div>
        <label htmlFor='school'></label>
        <input
          placeholder='School Name'
          type='text'
          name='school'
          value={school}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label htmlFor='degree'></label>
        <input
          placeholder='Title of Study'
          type='text'
          name='degree'
          value={degree}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label htmlFor='studyStartDate'></label>
        <input
          placeholder='Study Start Date'
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          name='studyStartDate'
          value={studyStartDate}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label htmlFor='studyEndDate'></label>
        <input
          placeholder='Study End Date'
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          name='studyEndDate'
          value={studyEndDate}
          onChange={onInputChange}
        />
      </div>
    </div>
  )
}

export default Education;