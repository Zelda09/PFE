import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useState } from "react";
import DatePickerOne from "../../components/DatePickerOne.tsx";
const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box
      className="rounded-sm border border-stroke  shadow-default dark:border-strokedark dark:bg-boxdark"
      m="20px">
      <Header title="Créer un utilisateur" />
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}>
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box className="text-right p-6.5 flex-col space-y-8">
                <div className="flex  flex-row-reverse gap-x-20	">
                  <div className="flex-row-reverse w-full xl:w-1/2">
                    <label className="text-right mb-2.5 block text-black dark:text-white ">
                      الاسم
                    </label>
                    <div className="relative">
                      <input
                        placeholder="الاسم"
                        className="text-right w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.id}
                        name="id"
                      />
                      {touched.id && errors.id && (
                        <div className="absolute text-red-600	">{errors.id}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex-row-reverse w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white text-right">
                      اللقب
                    </label>
                    <div className="relative">
                      <input
                        placeholder=" اللقب"
                        className="text-right w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.id}
                        name="id"
                      />
                      {touched.id && errors.id && (
                        <div className="absolute text-red-600	">{errors.id}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className=" mb-6 space-y-4">
                  <label className="mb-2.5 block text-black dark:text-white ">
                    العنوان الشخصي
                  </label>
                  <div className="relative">
                    <input
                      placeholder=" االعنوان الشخصي"
                      className="text-right w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.id}
                      name="id"
                    />
                    {touched.id && errors.id && (
                      <div className="absolute text-red-600	">{errors.id}</div>
                    )}
                  </div>
                </div>
                <div className="mb-6 space-y-4">
                  <label className="mb-2.5 block text-black dark:text-white ">
                    الرقم الصناعي
                  </label>
                  <div className="relative">
                    <input
                      placeholder=" الرقم الصناعي"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.id}
                      name="id"
                    />
                    {touched.id && errors.id && (
                      <div className="absolute text-red-600	">{errors.id}</div>
                    )}
                  </div>
                </div>
                <div className="mb-6 space-y-4">
                  <label className="mb-2.5 block text-black dark:text-white ">
                    الرقم الصناعي
                  </label>
                  <div className="relative">
                    <input
                      placeholder=" الرقم الصناعي"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.id}
                      name="id"
                    />
                    {touched.id && errors.id && (
                      <div className="absolute text-red-600	">{errors.id}</div>
                    )}
                  </div>
                </div>
                
                <div>
                  <select value={selectedOption} onChange={handleOptionChange}>
                    <option className="text-white" value="">Select an option</option>
                    <option className="text-white" value="Admin">Admin</option>
                    <option className="text-white" value="Manager">Manager</option>
                    <option className="text-white" value="User">User</option>
                  </select>
                  {selectedOption && <p>Access lvl: {selectedOption}</p>}
                </div>
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Creer un user
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </div>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;
