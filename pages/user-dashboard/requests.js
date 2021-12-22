import React from "react";
import RequestsPage from "../../components/subPages/UserDashBoard/RequestsPage";
import withAuthUser from "../../HOC/withAuthUser";
import UserDashBoardLayout from "../../layouts/UserDashBoardLayout";

const patients = () => {
  return (
    <UserDashBoardLayout>
      <RequestsPage />
    </UserDashBoardLayout>
  );
};

export default withAuthUser(patients);
