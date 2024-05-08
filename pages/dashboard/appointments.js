import AppointmentsPage from "../../components/subPages/DeshBoard/AppointmentsPage";
import withAuth from "../../HOC/withAuth";
import DashboardLayout from "../../layouts/DashBoardLayout";

const appointments = () => {
  return (
    <DashboardLayout>
      <AppointmentsPage />
    </DashboardLayout>
  );
};

export default withAuth(appointments);
