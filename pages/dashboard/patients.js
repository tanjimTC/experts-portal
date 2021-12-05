import React from "react";
import PatientsPage from "../../components/subPages/DeshBoard/PatientsPage";
import withAuth from "../../HOC/withAuth";
import DashboardLayout from "../../layouts/DashBoardLayout";

const patients = () => {
  return (
    <DashboardLayout>
      <PatientsPage />
    </DashboardLayout>
  );
};

export default withAuth(patients);
