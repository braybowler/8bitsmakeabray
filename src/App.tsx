import { BrowserRouter, Routes } from 'react-router-dom';
import HeaderBar from "./components/HeaderBar.tsx";

function App() {
  return (
      <BrowserRouter>
          <div className="p-2 min-h-screen min-w-screen flex flex-col bg-slate-600">
              <HeaderBar/>
              <Routes>
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
