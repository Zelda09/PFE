import { Box } from "@mui/material";
import Header from "../../components/Header";
import Calendar from "../../components/Calendar";

const Calendars = () => {
  return (
    <Box m="20px">
      <Header title="Calendar" />
      <Box height="90%">
        <Calendar/>
      </Box>
    </Box>
  );
};

export default Calendars;