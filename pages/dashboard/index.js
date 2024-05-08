import DashboardPage from "../../components/subPages/DeshBoard/DashboardPage";
import withAuth from "../../HOC/withAuth";
import DashboardLayout from "../../layouts/DashBoardLayout";

const index = () => {
  return (
    <DashboardLayout>
      <DashboardPage />
    </DashboardLayout>
  );
};

export default withAuth(index);
