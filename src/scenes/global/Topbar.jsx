import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{ background: `${colors.fixAccent[300]} !important` }}
      display="flex"
      justifyContent="end"
      p={2}>
      {/* ICONS */}
      {/* dark/light */}
      <IconButton sx={{ color: "colors.fixAccent[500]"}} onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
        {/* dark/light */}
      </IconButton>
      <IconButton
        sx={{
          color: "colors.fixAccent[500]",
          p: 2,
        }}
        aria-label="notifications">
        <NotificationsOutlinedIcon />
      </IconButton>
      <IconButton
        sx={{ color: "colors.fixAccent[500]", p: 2 }}
        aria-label="settings">
        <SettingsOutlinedIcon />
      </IconButton>
      <IconButton
        sx={{ color: "colors.fixAccent[500]", p: 2 }}
        aria-label="person">
        <PersonOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default Topbar;
