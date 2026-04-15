import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;