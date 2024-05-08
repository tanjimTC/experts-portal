import Link from "next/link";
const SettingPage = () => {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="relative box bg-red-200 w-32 h-32 overflow">
        <div
          className="origin-right absolute top-0 left-0 w-full h-full transform -skew-x-12 bg-red-500 hidden"
          style={{ left: "-90%" }}
        ></div>
        <div
          className="origin-top-right absolute top-0 right-0 h-full transform skew-x-12 bg-green-500 opacity-50"
          style={{ width: "50%" }}
        ></div>
      </div>
      <p
        className="text-4xl text-gray-500 ml-5"
        style={{ fontFamily: "Lobster" }}
      >
        Comming soon...
      </p>
    </div>
  );
};

export default SettingPage;
