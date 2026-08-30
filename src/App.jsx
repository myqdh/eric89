import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
//import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-ember selection:text-paper">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
