// App.js
import { useState } from "react";
import { useSelector } from "react-redux";
import Topbar from "./components/globals/Topbar";
import Sidebar from "./components/globals/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Routing from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const auth = useSelector((state) => state.auth);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <BrowserRouter>
          <div className="app">
            {auth.authenticated && <Sidebar isSidebar={isSidebar} />}
            <main className="content">
              {auth.authenticated && <Topbar setIsSidebar={setIsSidebar} />}
              <Routing />
              <ToastContainer position="bottom-right" hideProgressBar />
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
