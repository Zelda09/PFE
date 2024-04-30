import React from "react";
import DatePickerOne from "../../components/DatePickerOne.tsx";

const Testidk = () => {
  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Time and date
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <DatePickerOne />
        </div>
      </div>
    </div></div></div>
  );
};

export default Testidk;
