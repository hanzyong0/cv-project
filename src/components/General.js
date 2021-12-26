import React, { Component } from 'react'

// Class Component
// class General extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const { name, email, phone, onInputChange } = this.props;
//     return (
//       <div className='form-control'>
//         <p>Personal Information</p>
//         <div>
//           <label htmlFor='name'></label>
//           <input
//             placeholder='Name'
//             type='text'
//             name='name'
//             value={name}
//             onChange={onInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor='email'></label>
//           <input
//             placeholder='Email'
//             type='email'
//             name='email'
//             value={email}
//             onChange={onInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor='phone'></label>
//           <input
//             placeholder='Phone Number'
//             type='tel'
//             name='phone'
//             value={phone}
//             onChange={onInputChange}
//           />
//         </div>
//       </div>
//     );
//   };
// };

// export default General;

// Functional Component
const General = (props) => {
  const { name, email, phone, onInputChange } = props;
  return (
    <div className='form-control'>
      <p>Personal Information</p>
      <div>
        <label htmlFor='name'></label>
        <input
          placeholder='Name'
          type='text'
          name='name'
          value={name}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label htmlFor='email'></label>
        <input
          placeholder='Email'
          type='email'
          name='email'
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label htmlFor='phone'></label>
        <input
          placeholder='Phone Number'
          type='tel'
          name='phone'
          value={phone}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default General;