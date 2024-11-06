import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderBar from "./components/HeaderBar.tsx";

function App() {
  return (
      <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-white">
              <HeaderBar/>
              <Routes>
              </Routes>
          </div>
      </BrowserRouter>
  )
}

export default App
