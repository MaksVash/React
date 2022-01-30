import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Heder from './components/Heder/Heder';
import Musik from './components/Musik/Musik';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Seting from './components/Seting/Seting';




const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wraper'>
        <Heder />
        <Navbar />

        <div className='app-wraper-content'>
          <Routes>
            <Route exact path='/dialogs/*' element={ <Dialogs dialogs={props.dialogs} meseges={props.meseges}/>} />
            <Route path='/profile' element={<Profile posts={props.posts}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/seting' element={<Seting />} />
            <Route path='/musik' element={<Musik />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}
export default App;
