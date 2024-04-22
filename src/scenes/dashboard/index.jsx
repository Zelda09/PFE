import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = ()=>{
    return(
    <Box m="20px">
        <Box display="flex" justifyContent="space-between"alignContent="center">
            <Header title="Tableau de bord" subtitle="Bienvenue a Tableau de bord" />
        </Box>
    </Box>
    );
   
};

export default Dashboard;