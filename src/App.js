import React, { Component, useState } from 'react'
import Header from './components/Header';
import Education from './components/Education';
import General from './components/General'
import Experience from './components/Experience';
import Preview from './components/Preview';
import './styles/App.css';
import './styles/Preview.css';

// Class Component
// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       preview: false,
//       name: '',
//       email: '',
//       phone: '',
//       school: '',
//       degree: '',
//       studyStartDate: '',
//       studyEndDate: '',
//       company: '',
//       position: '',
//       leaveDate: '',
//     }
//   }

//   onSubmitForm = (e) => {
//     e.preventDefault();
//     this.setState({
//       preview: true
//     });
//   };

//   onEditForm = (e) => {
//     e.preventDefault();
//     this.setState({
//       preview: false
//     });
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   };

//   render() {
//     const { preview } = this.state;
//     const { name, email, phone } = this.state;
//     const { school, degree, studyStartDate, studyEndDate } = this.state;
//     const { company, position, leaveDate } = this.state;
//     if (preview) {
//       return (
//         <div className='app'>
//           <Header />
//           <Preview
//             name={name}
//             email={email}
//             phone={phone}
//             school={school}
//             degree={degree}
//             studyStartDate={studyStartDate}
//             studyEndDate={studyEndDate}
//             company={company}
//             position={position}
//             leaveDate={leaveDate}
//             editBtn={this.onEditForm}
//           />
//         </div>
//       );
//     } else {
//       return (
//         <div className='app'>
//           <Header />
//           <div className='main'>
//             <form className='container' onSubmit={this.onSubmitForm}>
//               <General
//                 name={name}
//                 email={email}
//                 phone={phone}
//                 onInputChange={this.handleChange}
//               />
//               <Education
//                 school={school}
//                 degree={degree}
//                 studyStartDate={studyStartDate}
//                 studyEndDate={studyEndDate}
//                 onInputChange={this.handleChange}
//               />
//               <Experience
//                 company={company}
//                 position={position}
//                 leaveDate={leaveDate}
//                 onInputChange={this.handleChange}
//               />
//               <button className='previewBtn' type='submit'>Preview</button>
//             </form>
//           </div>
//         </div>
//       );
//     }
//   }
// }

// export default App

// Functional Component
const App = () => {
  const [preview, setPreview] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    degree: '',
    studyStartDate: '',
    studyEndDate: '',
    company: '',
    position: '',
    leaveDate: '',
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  const onEditForm = (e) => {
    e.preventDefault();
    setPreview(false);
  };

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };;

  if (preview) {
    return (
      <div className='app'>
        <Header />
        <Preview
          name={inputs.name}
          email={inputs.email}
          phone={inputs.phone}
          school={inputs.school}
          degree={inputs.degree}
          studyStartDate={inputs.studyStartDate}
          studyEndDate={inputs.studyEndDate}
          company={inputs.company}
          position={inputs.position}
          leaveDate={inputs.leaveDate}
          editBtn={onEditForm}
        />
      </div>
    );
  } else {
    return (
      <div className='app'>
        <Header />
        <div className='main'>
          <form className='container' onSubmit={onSubmitForm}>
            <General
              name={inputs.name}
              email={inputs.email}
              phone={inputs.phone}
              onInputChange={handleChange}
            />
            <Education
              school={inputs.school}
              degree={inputs.degree}
              studyStartDate={inputs.studyStartDate}
              studyEndDate={inputs.studyEndDate}
              onInputChange={handleChange}
            />
            <Experience
              company={inputs.company}
              position={inputs.position}
              leaveDate={inputs.leaveDate}
              onInputChange={handleChange}
            />
            <button className='previewBtn' type='submit'>Preview</button>
          </form>
        </div>
      </div>
    );
  }
}


export default App

