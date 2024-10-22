import React from "react";
import Header from "@/components/Header/Header";
import PatientManagement from "@/components/PatientList/PatientManagement";

export default function patients() {
  return (
    <div>
      <Header />
      <PatientManagement />
    </div>
  );
}
