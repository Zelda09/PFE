import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext  } from "../../theme";
// import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";



const Topbar = ()=>{
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
  
    return (
    <Box display="flex" justifyContent="end" p={2}>   
        {/* ICONS */}
            {/* dark/light */}
            <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
            {/* dark/light */}
            </IconButton>
            <IconButton sx={{ p: 2 }} aria-label="notifications">
                <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton sx={{ p: 2 }} aria-label="settings">
                <SettingsOutlinedIcon />
            </IconButton>
            <IconButton sx={{ p: 2 }} aria-label="person">
                <PersonOutlinedIcon />
            </IconButton>

        </Box>
)
};

export default Topbar; 