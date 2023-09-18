import { Fragment, } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Crypto from './pages/Crypto';
import Saved from './pages/Saved';
import Trending from './pages/Trending';
import Header from './components/Header';
import CryptoProvider from './context/CryptoProvieder';
import CryptoDetails from './components/CryptoDetails';
function App() {



  return (
    <Fragment>
      <CryptoProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route  path='/' element={<Crypto></Crypto>} ></Route>
          <Route path='/:coinId' element={<CryptoDetails></CryptoDetails>}></Route>
          <Route path='/saved' element={<Saved/>}></Route>
          <Route path='/trending' element={<Trending/>}></Route>
        </Routes>
      </BrowserRouter>
      </CryptoProvider>
    </Fragment>
  );
}

export default App;
