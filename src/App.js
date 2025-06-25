import './App.css';
import About from './components/About/About';
import  Header from './components/Header/Header';
import Home from './components/Home/home';
import Skill from './components/Skills/Skill';
import Education from './components/Education/Education';
import Projects from './components/Projects/Project'
import SplashCursor from './components/Reactbits/SplashCursor/SplashCursor'
import Aurora from './components/Reactbits/Aurora/Aurora'
import Footer from './components/Footer/Footer';
function App() {
  const sections = [Home, About, Skill, Education, Projects];
  return (
    <div className="App">
      <Aurora></Aurora>
      <SplashCursor />
      <Header />
      {sections.map((Section, index) => (
        <div
          key={index}
          className={index % 2 === 0 ? "section-even" : "section-odd"}
        >
          <Section />
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default App;
