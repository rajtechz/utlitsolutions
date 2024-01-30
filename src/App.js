import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import NavigationBar from './component/navbar/NavigationBar';
import Service from './component/service/Service';
import Technologies from './component/technologies/Technologies';
import WebDevelopment from './component/service/ContectToService/WebDevelopment/WebDevelopment';
import IosAppDevelopment from './component/service/ContectToService/WebDevelopment/IosAppDevelopment';
import AndroidDevelopment from './component/service/ContectToService/WebDevelopment/AndroidDevelopment';
import Aboutus from './component/aboutus/Aboutus';
import Career from './component/career/Career';
import PrivacyPolicy from './component/privacyPolicy/PrivacyPolicy';
import GraphicDesigne from './component/service/ContectToService/WebDevelopment/GraphicDesigne';
import UxDesigne from './component/service/ContectToService/WebDevelopment/UxDesigne';
import Seo from './component/service/ContectToService/WebDevelopment/Seo';
import DigitalMarketing from './component/service/ContectToService/WebDevelopment/DigitalMarketing';
import RantalObject from './component/service/ContectToService/WebDevelopment/RantalObject';
import WhatsApp from './component/whatsapp/Whatsapp';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/career' element={<Career />} />
          <Route path='/technologies' element={<Technologies />} />
          <Route path='/service/webDevelopment' element={<WebDevelopment />} />
          <Route path='/service/ios' element={<IosAppDevelopment />} />
          <Route path='/service/androidDevelopment' element={<AndroidDevelopment />} />
          <Route path='/service/graphicDesign' element={<GraphicDesigne />} />
          <Route path='/service/uxDesign' element={<UxDesigne />} />
          <Route path='/service/seo' element={<Seo />} />
          <Route path='/service/degitalMarketing' element={<DigitalMarketing />} />
          <Route path='/service/rantalObject' element={<RantalObject />} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        </Routes>
        <WhatsApp />
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
