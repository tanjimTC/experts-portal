import AppointmentsPage from "../../components/subPages/UserDashBoard/AppointmentsPage";
import withAuthUser from "../../HOC/withAuthUser";
import UserDashBoardLayout from "../../layouts/UserDashBoardLayout";

const appointments = () => {
  return (
    <UserDashBoardLayout>
      <AppointmentsPage />
    </UserDashBoardLayout>
  );
};

export default withAuthUser(appointments);
