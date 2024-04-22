import {Typography ,Box , useTheme} from "@mui/material";
import {tokens} from "../theme";

const Header = ({ title , subtitle}) => {
    const theme = useTheme();
    const color = tokens(theme.palette.mode);
    return (
        <Box sx={{color:color.grey[100]}}>
            <Typography variant="h2"
                        color={color.grey[100]}
                         frontWeight="bold"
                         sx={{mb:"5px"}}> 
            {title}
            </Typography>
            <Typography variant="h5" 
                        color={color.greenAccent[400]}>
            {subtitle}
            </Typography>
        </Box>
    )
};

export default Header;