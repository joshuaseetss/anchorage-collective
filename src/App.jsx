import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import AnchoredMen from './pages/AnchoredMen'
import AnchoredProfessionals from './pages/AnchoredProfessionals'
import AnchoredCaregivers from './pages/AnchoredCaregivers'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/anchored-men" element={<AnchoredMen />} />
        <Route path="/anchored-professionals" element={<AnchoredProfessionals />} />
        <Route path="/anchored-caregivers" element={<AnchoredCaregivers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:category" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
