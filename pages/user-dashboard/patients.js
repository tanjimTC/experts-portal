import React from "react";
import PatientsPage from "../../components/subPages/UserDashBoard/PatientsPage";
import withAuthUser from "../../HOC/withAuthUser";
import UserDashBoardLayout from "../../layouts/UserDashBoardLayout";

const patients = () => {
  return (
    <UserDashBoardLayout>
      <PatientsPage />
    </UserDashBoardLayout>
  );
};

export default withAuthUser(patients);
