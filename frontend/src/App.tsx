import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Signup  from './pages/Signup'
// import  Login  from './pages/Login'
import LandingPage from './pages/LandingPage'
import Modal from './components/Modal'
import Dashboard from './pages/Dashboard'
import WriteBlogPage from './pages/WriteBlogPage'
import BlogDetails from './pages/BlogDetails'
import UserProfiles from './pages/UserProfiles'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LandingPage/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Modal/>}/>
          <Route path="/dashboard" element={ <Dashboard/>} />
          <Route path="/writeblog" element={ <WriteBlogPage/>} />
          <Route path="/blogpreview" element={<BlogDetails/>} />
          <Route path="/userprofile" element={<UserProfiles/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App