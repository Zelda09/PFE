import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext,  } from "../../theme";
// import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = ()=>{
    const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
    <Box display="flex" justifyContent="space-between" p={2}>
        {/*search bar*/ }
        <Box></Box>
        {/* <Box 
            display="flex" 
            backgroundColor={colors.primary[400]}
            borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search…" />
                <IconButton sx={{ p: 1 }} aria-label="search">
                    <DarkModeOutlinedIcon />
                </IconButton>
            </Box> */}
        {/* ICONS */}
        <Box display="flex" >
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

        </Box>
)
};

export default Topbar; 