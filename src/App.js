import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import TopHeader from './Component/TopHeader';
// import Testing from './Component/Testing';
import Scroll from './Component/Scroll';
import Banner from './Component/Banner';
import EducationSection from './Component/EducationSection';
import Choose from './Component/Choose';
import Learn from './Component/Learn';
import Footer from './Component/Footer';


function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Banner />
      <EducationSection />
      {/* <Testing /> */}
      {/* <Scroll /> */}
      <Choose />
      <Learn />
      <Footer />


    </>
  );
}

export default App;
