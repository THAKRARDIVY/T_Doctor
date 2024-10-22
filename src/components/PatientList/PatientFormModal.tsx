// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const PatientDetailsForm = ({
//   patients,
//   setPatients,
//   setName,
//   setAge,
//   setGender,
//   handleClose
// }: {
//   patients?: any;
//   setPatients?: any;
//   setName?: any;
//   setAge?: any;
//   setGender?: any;
//   handleClose?:any
// }) => {
//   // Yup validation schema
//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(3, "Name must be at least 3 characters")
//       .required("Name is required"),
//     age: Yup.number()
//       .min(18, "Age must be at least 18")
//       .max(100, "Age must be less than 100")
//       .required("Age is required"),
//     gender: Yup.string().required("Gender is required"),
//   });

//   const handleSubmit = (e: any) => {
//     // e.preventDefault();

//     // Create a new patient object
//     const newPatient = {
//       id: patients.length + 1,
//       name: e.name,
//     };

//     // Add the new patient to the patients list
//     setPatients([...patients, newPatient]);

//     // Reset form fields
//     setName("");
//     setAge("");
//     setGender("");
//     handleClose()
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-center mb-6">
//         Patient Details
//       </h2>

//       <Formik
//         initialValues={{ name: "", age: "", gender: "" } as any}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ setFieldValue }) => (
//           <Form>
//             <div className="mb-4">
//               <Field
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <ErrorMessage
//                 name="name"
//                 component="p"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>

//             <div className="mb-4">
//               <Field
//                 type="tal"
//                 name="age"
//                 placeholder="Age"
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <ErrorMessage
//                 name="age"
//                 component="p"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>

//             <div className="mb-4">
//               <Field
//                 as="select"
//                 name="gender"
//                 className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </Field>
//               <ErrorMessage
//                 name="gender"
//                 component="p"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               Add Patient
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default PatientDetailsForm;

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const PatientDetailsForm = ({
  patients,
  setPatients,
  setName,
  setAge,
  setGender,
  handleClose,
}: {
  patients?: any;
  setPatients?: any;
  setName?: any;
  setAge?: any;
  setGender?: any;
  handleClose?: any;
}) => {
  // Yup validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "First Name must be at least 2 characters")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(2, "Last Name must be at least 2 characters")
      .required("Last Name is required"),
    age: Yup.number()
      .min(18, "Age must be at least 18")
      .max(100, "Age must be less than 100")
      .required("Age is required"),
    mobileNo: Yup.string()
      .matches(/^\d{10}$/, "Mobile No must be 10 digits")
      .required("Mobile No is required"),
    birthDate: Yup.date().required("Birth Date is required").nullable(),
    email: Yup.string()
      .email("Invalid email format"),
    //   .required("Email is required"),
    address: Yup.string()
      .min(10, "Address must be at least 10 characters")
      .required("Address is required"),
    remarks: Yup.string(),
    medicalIssues: Yup.string(),
    medicineList: Yup.string(),
  });

  const handleSubmit = (values: any) => {
    // Create a new patient object
    const newPatient = {
      id: patients.length + 1,
      ...values,
    };

    // Add the new patient to the patients list
    setPatients([...patients, newPatient]);

    // Reset form fields
    handleClose();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Patient Details
      </h2>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          age: "",
          mobileNo: "",
          birthDate: "",
          email: "",
          address: "",
          remarks: "",
          medicalIssues: "",
          medicineList: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {/* First Name */}
            <div className="mb-4">
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="firstName"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="lastName"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Age */}
            <div className="mb-4">
              <Field
                type="tal"
                name="age"
                placeholder="Age"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="age"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Mobile No */}
            <div className="mb-4">
              <Field
                type="text"
                name="mobileNo"
                placeholder="Mobile No"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="mobileNo"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Birth Date */}
            <div className="mb-4">
              <Field
                type="date"
                name="birthDate"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="birthDate"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <Field
                as="textarea"
                name="address"
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="address"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Medical Issues */}
            <div className="mb-4">
              <Field
                as="textarea"
                name="medicalIssues"
                placeholder="Medical Issues"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Medicine List */}
            <div className="mb-4">
              <Field
                as="textarea"
                name="medicineList"
                placeholder="Medicine List"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Remarks */}
            <div className="mb-4">
              <Field
                as="textarea"
                name="remarks"
                placeholder="Remarks"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Add Patient
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PatientDetailsForm;
