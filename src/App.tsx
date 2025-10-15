import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavigationHeader } from './components/NavigationHeader'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Projects } from './pages/Projects'
import { Clients } from './pages/Clients'
import { Contact } from './pages/Contact'
import { ScrollToTopButton } from './components/ScrollToTopButton'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTopButton />
        <NavigationHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
