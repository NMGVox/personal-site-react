import './App.css'
import About from './components/About'
import ContactMe from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Greeting from './components/greeting'


function App() {
  return (
    <>
      <Greeting />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  )
}

export default App
