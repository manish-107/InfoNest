import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Signup  from './pages/Signup'
import  Login  from './pages/Login'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/" element={ <LandingPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App