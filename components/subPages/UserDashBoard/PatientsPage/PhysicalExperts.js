import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequstedAppointmentByClientEmail } from "../../../../redux/slices/appointmentSlice";
import { setLoggedInExpert } from "../../../../redux/slices/authSlice";
const PhysicalExperts = () => {
  const dispatch = useDispatch();

  const { allPhysicalAppointmentClient } = useSelector(
    (state) => state.appointment
  );

  useEffect(() => {
    dispatch(setLoggedInExpert());
    const email = JSON.parse(localStorage.getItem("userInfoLocal")).email;
    dispatch(getRequstedAppointmentByClientEmail(email));
  }, [dispatch]);

  return (
    <div>
      <p className="text-[#707EAE] text-2xl font-bold mb-4">
        Experts - Physical
      </p>
      <div className="flex-1 text-gray-700 text-center  px-2 py-5  rounded">
        <div className="lg:flex lg:items-center">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center "
                        >
                          No.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center "
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center "
                        >
                          Status
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center "
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {allPhysicalAppointmentClient.filter(
                        (appointment) => appointment.status === true
                      ).length > 0 ? (
                        allPhysicalAppointmentClient
                          .filter((appointment) => appointment.status === true)
                          .map((data, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {index + 1}
                                </span>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {data.expertName}
                                </span>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {data.expertEmail}
                                </span>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  paid
                                </span>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <a href={data.receipt_url} className="">
                                  {data.date}
                                </a>
                              </td>
                            </tr>
                          ))
                      ) : (
                        <h1>No Appointment</h1>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalExperts;
