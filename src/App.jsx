import { Navigate, Route, Routes } from "react-router-dom"
import Landing from "./Landing"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
