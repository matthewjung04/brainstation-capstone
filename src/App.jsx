import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import UserPage from './pages/UserPage/UserPage'
import CreateEventPage from './pages/CreateEventPage/CreateEventPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/user-page/:username' element={<UserPage />} />
        <Route path='/:username/new-event' element={<CreateEventPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
