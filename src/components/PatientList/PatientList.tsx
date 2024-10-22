import React from "react";

export default function PatientList({ patients }: { patients?: any }) {
  return (
    <div className="m-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-black mb-4">Patient List</h2>
      {patients.length > 0 ? (
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          role="list"
        >
          {patients.map((patient: any) => (
            <li
              key={patient.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4">
                <div className="text-lg font-semibold text-gray-800">
                  {patient.firstName} {patient.lastName}
                </div>
                <div className="mt-2 text-gray-600">
                  <p>
                    <span className="font-medium">Patient ID:</span> {patient.id}
                  </p>
                  <p>
                    <span className="font-medium">Date of Birth:</span>{" "}
                    {new Date(patient.birthDate).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-medium">Age:</span> {patient.age}
                  </p>
                  <p>
                    <span className="font-medium">Mobile No:</span>{" "}
                    {patient.mobileNo}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {patient.email}
                  </p>
                  <p>
                    <span className="font-medium">Address:</span>{" "}
                    {patient.address}
                  </p>
                  <p>
                    <span className="font-medium">Remarks:</span>{" "}
                    {patient.remarks}
                  </p>
                  <p>
                    <span className="font-medium">Medical Issues:</span>{" "}
                    {patient.medicalIssues}
                  </p>
                  <p>
                    <span className="font-medium">Medicine List:</span>{" "}
                    {patient.medicineList}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center">No patients available.</p>
      )}
    </div>
  );
}