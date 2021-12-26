import React, { Component, } from 'react'

// Class Component
// class Preview extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const { name, email, phone } = this.props;
//     const { school, degree, studyStartDate, studyEndDate } = this.props;
//     const { company, position, leaveDate, editBtn } = this.props;
//     return (
//       <div className='main-cv'>
//         <div className='cv'>
//           <div className='first'>
//             <div className='name'>{name}</div>
//             <p>{email}</p>
//             <p>{phone}</p>
//           </div>
//           <div className='second'>
//             <div className='edu-container'>
//               <div className='edu-title'>Education</div>
//               <div>School:
//                 <p>{school}</p>
//               </div>
//               <div>Degree:
//                 <p>{degree}</p>
//               </div>
//               <div>Study Date:
//                 <p>{studyStartDate}  to  {studyEndDate}</p>
//               </div>
//             </div>
//             <div className='exp-container'>
//               <div className='exp-title'>Experience</div>
//               <div>Company Name:
//                 <p>{company}</p>
//               </div>
//               <div>Job Title:
//                 <p>{position}</p>
//               </div>
//               <div>Left Company On:
//                 <p>{leaveDate}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button
//           className='editBtn'
//           type='submit'
//           onClick={editBtn}>
//           Edit
//         </button>
//       </div>
//     )
//   }
// }

// export default Preview

// Functional Component
const Preview = (props) => {
  const { name, email, phone } = props;
  const { school, degree, studyStartDate, studyEndDate } = props;
  const { company, position, leaveDate, editBtn } = props;
  return (
    <div className='main-cv'>
      <div className='cv'>
        <div className='first'>
          <div className='name'>{name}</div>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <div className='second'>
          <div className='edu-container'>
            <div className='edu-title'>Education</div>
            <div>School:
              <p>{school}</p>
            </div>
            <div>Degree:
              <p>{degree}</p>
            </div>
            <div>Study Date:
              <p>{studyStartDate}  to  {studyEndDate}</p>
            </div>
          </div>
          <div className='exp-container'>
            <div className='exp-title'>Experience</div>
            <div>Company Name:
              <p>{company}</p>
            </div>
            <div>Job Title:
              <p>{position}</p>
            </div>
            <div>Left Company On:
              <p>{leaveDate}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className='editBtn'
        type='submit'
        onClick={editBtn}>
        Edit
      </button>
    </div>
  )
}

export default Preview
