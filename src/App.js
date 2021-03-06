import Header from './components/Header'
import Footer from './components/Footer'
import BannerPage from './components/BannerPage';
import WelcomePage from './components/WelcomePage';
import AboutUs from './components/AboutUs';
import FitnessCenter from './components/FitnessCenter'
import GrowWithUs from './components/GrowWithUs';
import TheClasses from './components/TheClasses';
import FitnessImages from './components/FitnessImages';
import Testi from './components/Testi';
function App() {
  return (
    <div>
      <Header/>
      <BannerPage/>
      <WelcomePage/>
      <AboutUs/>
      <FitnessCenter/>
      <GrowWithUs/>
      <TheClasses/>
      <FitnessImages/>
      <Testi/>
      <Footer/>
    </div>
  );
}

export default App;
