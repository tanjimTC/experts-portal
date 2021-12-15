import DashboardPage from "../../components/subPages/UserDashBoard/DashboardPage";
import withAuthUser from "../../HOC/withAuthUser";
import UserDashBoardLayout from "../../layouts/UserDashBoardLayout";

const index = () => {
  return (
    <UserDashBoardLayout>
      <DashboardPage />
    </UserDashBoardLayout>
  );
};

export default withAuthUser(index);
