import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRequstedAppointmentByEmail } from "../../../../redux/slices/appointmentSlice";
import { setLoggedInExpert } from "../../../../redux/slices/authSlice";
import { FcApproval, FcCancel } from "react-icons/fc";
import AxiosConfig from "../../../../AxiosConfig/AxiosConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillDelete } from "react-icons/ai";

const RequestsPage = () => {
  const dispatch = useDispatch();

  const { allPhysicalAppointment } = useSelector((state) => state.appointment);

  useEffect(() => {
    dispatch(setLoggedInExpert());
    const email = JSON.parse(localStorage.getItem("expertInfoLocal")).email;
    dispatch(getRequstedAppointmentByEmail(email));
  }, [dispatch]);

  const handleApprove = (id) => {
    const data = {
      id,
      status: true,
    };
    console.log(data);
    AxiosConfig.post("/appointment/update", data).then((res) => {
      if (res.data.success) {
        const email = JSON.parse(localStorage.getItem("expertInfoLocal")).email;
        dispatch(getRequstedAppointmentByEmail(email));
        toast.success("Appointment approved successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  const handleCancel = (id) => {
    const data = {
      id,
      status: false,
    };
    AxiosConfig.post("/appointment/update", data).then((res) => {
      if (res.data.success) {
        const email = JSON.parse(localStorage.getItem("expertInfoLocal")).email;
        dispatch(getRequstedAppointmentByEmail(email));
        toast.success("Appointment canceled successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };
  return (
    <div>
      <ToastContainer />
      <p className="text-[#707EAE] text-2xl font-bold mb-4">Pending Physical Appointment Requests</p>
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
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center "
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {allPhysicalAppointment.filter(
                        (item) => item.status === false
                      ).length > 0 ? (
                        allPhysicalAppointment
                          .filter((item) => item.status === false)
                          .map((data, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {index + 1}
                                </span>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {data.userName}
                                </span>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {data.userEmail}
                                </span>
                              </td>

                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <a href={data.receipt_url} className="">
                                  {data.date}
                                </a>
                              </td>

                              <td className="whitespace-nowrap text-sm text-gray-500">
                                <button className="inline-flex items-center justify-center w-8 h-8  text-indigo-100 ">
                                  <FcApproval
                                    className="w-6 h-6"
                                    onClick={() => handleApprove(data._id)}
                                  />
                                </button>
                                <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-red-500 ">
                                  <AiFillDelete
                                    className="w-6 h-6"
                                    onClick={() => handleCancel(data._id)}
                                  />
                                </button>
                              </td>
                            </tr>
                          ))
                      ) : (
                        <h1>No Pending physical Appointment Request</h1>
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

export default RequestsPage;
