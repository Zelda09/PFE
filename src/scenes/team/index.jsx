import {Box , Typography,useTheme} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {tokens} from "../../theme";
import {mockDataTeam} from "../../data/mockData"; //ywali yji mil BD
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team =() => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

//ili louta bach ttbdal hasb ma ani bach n3mal il BD
    const columns= [
        { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
   
        {field: "access",headerName: "Access Level",flex: 1,renderCell:({row:{access}})=>{
            return(

                <Box width="60%" 
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                    access==="admin"
                    ? colors.greenAccent[600]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
                >
                    {access ==="admin" && <AdminPanelSettingsOutlinedIcon />}
                    {access ==="user" && <LockOpenOutlinedIcon />}
                    {access ==="securite" && <SecurityOutlinedIcon />}
                    <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
                        {access}
                    </Typography>
                </Box>
            )
        }
    },
                    ]

    return (
        <Box m="20px">
            <Header title="TEAM"/>
            <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.blueAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.fixAccent[100],
            color: ` rgb(255, 255, 255)`,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.fixAccent[100],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
        </Box>
    )
}
export default Team;