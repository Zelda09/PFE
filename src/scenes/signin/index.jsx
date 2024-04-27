import React from "react";
import Logo from "../../images/logo/logo.png";
import pc from "./pc.png";
import { ColorModeContext, tokens } from "../../theme";
import {
  Typography,
  Button,
  IconButton,
  useTheme,
  Box,
  TextField,
} from "@mui/material";
import "./sign.css";
import { useContext } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
const SignIn = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const color = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const colors = tokens(theme.palette.mode);
  const initialValues = {
    id: "",
    mdp: "",
  };
  const checkoutSchema = yup.object().shape({
    id: yup.string().required("b1"),
    mdp: yup.string().required("required"),
  });

  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}>
      <Box //fih il zoz  
      className="b1"
        display="flex"
        borderRadius="35px"
        boxShadow="0px 0px 40px 0px rgba(0,0,0,10)"
        justifyContent="center"
        flexWrap="wrap"
        p="30px 45px"
        gap="2em">
        
        <Box
          flexDirection="column"
          display="flex"
          justifyContent="space-evenly">
          <Typography className="poppins-semibold"
            variant="h2"
            color={color.grey[100]}
            sx={{ mb: "40px" }}>
            SE CONNECTE A KKT
          </Typography>

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
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="ID"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.id}
                    name="id"
                    error={!!touched.id && !!errors.id}
                    helperText={touched.id && errors.id}
                    sx={{gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Mot de passe"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.mdp}
                    name="mdp"
                    error={!!touched.mdp && !!errors.mdp}
                    helperText={touched.mdp && errors.mdp}
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>
                <Box  display="flex" justifyContent="center" mt="20px">
                  <Button type="submit" sx={{ backgroundColor: '#2a31cabd', color: 'white' }} variant="contained" >
                    Ce Connecte
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </div>
  );
};

export default SignIn;
