import HomePage from './pages/homePage'
import Header from './components/Header'
import ProjectPage from './pages/projectsPage'
import ContactPage from './pages/contactPage'
import ResumePage from './pages/resumePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/resume' element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App