import "../../../styles/success.module.css";
import {
  AiOutlineIdcard,
  AiOutlineCalendar,
  AiOutlineLink,
} from "react-icons/ai";
import { expertSelector } from "../../../redux/slices/expertSlice";
import { useSelector } from "react-redux";
import Link from "next/link";

const SuccessPage = () => {
  const { bookingInformation } = useSelector(expertSelector);

  return (
    <div className="wrapperAlertOuter">
      <div className="wrapperAlert">
        <div className="contentAlert">
          <div className="topHalf">
            <p>
              <svg
                className="mx-auto"
                viewBox="0 0 512 512"
                width="100"
                title="check-circle"
              >
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
              </svg>
            </p>
            <h1>Congratulations</h1>
            <h2 className="text-2xl">Payment Successful!</h2>

            <ul className="bg-bubbles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="bottomHalf">
            <p className="text-xl">
              Congratulations!, you have Successfully booked a meeting with{" "}
              {bookingInformation.expertName}
            </p>
            <div className="flex items-center mt-2">
              <p className="text-xl mr-2">
                <AiOutlineCalendar className="text-xl text-successBg" />
              </p>

              <p className="text-xl">
                <span className="text-gray-700">{bookingInformation.date}</span>
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-xl mr-2">
                <AiOutlineIdcard className="text-xl text-successBg" />
              </p>
              <p className="text-xl">
                <span className="text-gray-700">
                  {bookingInformation.trxId}
                </span>
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-xl mr-2">
                <AiOutlineLink className="text-xl text-successBg" />
              </p>
              <p className="text-xl">
                <Link href="https://tanjim-chowdhury.web.app/" passHref={true}>
                  <span className="text-gray-700 underline cursor-pointer">
                    https://tanjim-chowdhury.web.app/
                  </span>
                </Link>
              </p>
            </div>

            <p className="text-gray-700 ">
              Track your payment status{" "}
              <a
                href={bookingInformation.receipt_url}
                className="underline text-blue-600  font-semibold cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                Here
              </a>
              .
            </p>

            <Link href="/" className="p-0" passHref={true}>
              <button className="mt-2 text-lg" id="alertMO">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
