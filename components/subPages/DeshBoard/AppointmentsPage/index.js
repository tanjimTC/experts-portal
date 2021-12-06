import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { dateFormat } from "../../../../utils";
import { doctorsData } from "../../../../Assets/Data/data";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentByDate } from "../../../../redux/slices/appointmentSlice";

const AppointmentsPage = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());
  const { appointmentByDate } = useSelector((state) => state.appointment);
  const onChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    dispatch(getAppointmentByDate(dateFormat(value)));
  }, [value, dispatch]);

  return (
    <div className="">
      <p className="text-[#707EAE] text-2xl font-bold mb-4">Appoinments</p>

      <div className=" mt-5 mx-auto px-2">
        <div className="md:flex">
          <div className="flex-1 text-gray-700 text-center  px-5 py-5 m-2 rounded">
            <div className="lg:flex lg:items-center">
              <div className="lg:flex-shrink-0">
                <Calendar onChange={onChange} value={value} />
              </div>
            </div>
          </div>

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
                              Role
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {appointmentByDate?.length > 0 ? (
                            appointmentByDate.map((data, index) => (
                              <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {data.userName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {data.userEmail}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {data.userPhone}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  Admin
                                </td>
                              </tr>
                            ))
                          ) : (
                            <h1>No appointment for Today!</h1>
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
      </div>
    </div>
  );
};

export default AppointmentsPage;
