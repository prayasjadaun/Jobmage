// import React, { useState } from 'react';

// function ApplyForm({ job }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //  form submission logic here
//     console.log(formData);
//   };

//   return (
//     <div className="apply-form">
//       <h2>Apply for {job.title}</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div>
//           <label htmlFor="resume">Resume:</label>
//           <input type="file" id="resume" name="resume" accept=".pdf" onChange={handleChange} />
//         </div>
//         <button type="submit">Submit Application</button>
//       </form>
//     </div>
//   );
// }

// export default ApplyForm;