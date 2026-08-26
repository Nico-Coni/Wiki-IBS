import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Community from './components/Community/Community'
import Vision from './components/Vision/Vision'

function App() {

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Vision />
        <Community />
        <About />
      </main>

      <Footer />

    </>
  )
}

export default App
