import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HeaderBar from "./components/HeaderBar.tsx";
import Home from "./pages/Home";
import {ThemeProvider} from "./providers/ThemeContext.tsx";

function App() {
  return (
      <ThemeProvider>
          <BrowserRouter>
              <div className="p-2 min-h-screen min-w-screen flex flex-col bg-slate-200 dark:bg-slate-600">
                  <HeaderBar/>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/home" element={<Home />} />
                  </Routes>
              </div>
          </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
