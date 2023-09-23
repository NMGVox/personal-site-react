import './App.css'
import About from './components/About'
import ContactMe from './components/Contact'
import retrieveData from './components/RetireveData'
import Skills from './components/Skills'
import Greeting from './components/greeting'

function App() {
  retrieveData();

  return (
    <>
      <Greeting />
      <About />
      <Skills />
      <ContactMe />
    </>
  )
}

export default App
