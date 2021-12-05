import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { dateFormat } from "../../../../utils";
import { doctorsData } from "../../../../Assets/Data/data";

const AppointmentsPage = () => {
  const [value, onChange] = useState(new Date());
  console.log("dateFormat", dateFormat(value));
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
                              Title
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
                          {doctorsData.map((data, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      Jane Cooper
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      jane.cooper@example.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  Regional Paradigm Technician
                                </div>
                                <div className="text-sm text-gray-500">
                                  Optimization
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Active
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Admin
                              </td>
                            </tr>
                          ))}
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
