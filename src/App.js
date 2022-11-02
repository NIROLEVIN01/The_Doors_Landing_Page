import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WelcomePage from './container/WelcomePage/WelcomePage';
import About from './container/About/About';
import Intro from './container/Intro/Intro';
import Gallery from './container/Gallery/Gallery';
import Discography from './container/Discography/Discography';

function App() {
  return (
    <div>
      <Navbar />
      <WelcomePage />
      <Intro />
      <About />
      <Gallery />
      <Discography />
      <Footer />
    </div>
  );
}

export default App;
