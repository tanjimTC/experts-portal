import React from "react";
import RequestsPage from "../../components/subPages/DeshBoard/RequestsPage";
import withAuth from "../../HOC/withAuth";
import DashboardLayout from "../../layouts/DashBoardLayout";

const requests = () => {
  return (
    <DashboardLayout>
      <RequestsPage />
    </DashboardLayout>
  );
};

export default withAuth(requests);
