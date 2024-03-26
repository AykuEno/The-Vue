import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import Deluxe from './pages/Deluxe';
import Aromatic from './pages/Aromatic';
import Steading from './pages/Steading';
import DeluxeList from './pages/Deluxe/DeluxeList';
import AromaticList from './pages/Aromatic/AromaticList';
import SteadingList from './pages/Steading/SteadingList';
import Faq from './pages/Faq';

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <div className='relative'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Deluxe' element={<Deluxe />} />
          <Route path='/DeluxeList' element={<DeluxeList />} />
          <Route path='/Aromatic' element={<Aromatic />} />
          <Route path='/AromaticList' element={<AromaticList />} />
          <Route path='/Steading' element={<Steading />} />
          <Route path='/SteadingList' element={<SteadingList />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/Faq' element={<Faq />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
        <Footer />

      </div>
    </BrowserRouter>
  );
}
