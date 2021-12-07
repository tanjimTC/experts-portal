import React from "react";
import SettingPage from "../../components/subPages/DeshBoard/SettingPage";
import withAuth from "../../HOC/withAuth";
import DashboardLayout from "../../layouts/DashBoardLayout";

const settings = () => {
  return (
    <DashboardLayout>
      <SettingPage />
    </DashboardLayout>
  );
};

export default withAuth(settings);
