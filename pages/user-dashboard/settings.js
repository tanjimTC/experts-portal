import React from "react";
import SettingPage from "../../components/subPages/UserDashBoard/SettingPage";
import withAuthUser from "../../HOC/withAuthUser";
import UserDashBoardLayout from "../../layouts/UserDashBoardLayout";

const settings = () => {
  return (
    <UserDashBoardLayout>
      <SettingPage />
    </UserDashBoardLayout>
  );
};

export default withAuthUser(settings);
