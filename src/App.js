import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import {CssBaseline,ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
// import SignIn from "./scenes/signin";
import Dashboard from "./scenes/dashboard";
// import Calendar from "./scenes/calendar";
// import Contacts from "./scenes/contacts";
// import Form from "./scenes/form";
// import Bar from "./scenes/bar";
// import Pie from "./scenes/pie";
// import Line from "./scenes/line";
// import Geo from "./scenes/geo";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
      <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar}/>
          <Routes >
          {/* <Route path="/signin" element={<SignIn/>} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/calendar" element={<Calendar />} /> */}
          {/* <Route path="/contacts" element={<Contacts />} /> */}
          {/* <Route path="/form" element={<Form />} /> */}
          {/* <Route path="/bar" element={<Bar />} /> */}
          {/* <Route path="/pie" element={<Pie />} /> */}
          {/* <Route path="/line" element={<Line />} /> */}
          {/* <Route path="/geo" element={<Geo />} /> */}
          </Routes>
        </main>
        </div> 
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
    
}

export default App
