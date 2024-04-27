import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import {CssBaseline,ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import SignIn from "./scenes/signin/index.tsx";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Calendar from "./scenes/calendar";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
// import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='app'>
      {window.location.pathname !== '/signin' && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
          {window.location.pathname !== '/signin' && <Topbar setIsSidebar={setIsSidebar}/>} 
            <Routes >
              <Route path="/signin" element={<SignIn />} />
              {/* <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} /> */}
            </Routes>
          </main>
        </div> 
    </ThemeProvider>
    </ColorModeContext.Provider>
  )

}

export default App