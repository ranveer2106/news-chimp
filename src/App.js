import React, { useState } from 'react';
import Navbar from './components/navbar';
import News from './components/news';
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'
// import Btns from './components/btns';


const NewsChimp = () => {

  const [progress, setProgress] = useState(2)


  return (
    <>
      <BrowserRouter>
        <React.StrictMode>


          <Navbar />
          <div>
            <LoadingBar
              color='#f11946'
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
          </div>
          <Routes>
            <Route exact path="/" element={<News key="home" progress={progress} setProg={setProgress} pageSize={9} category="general" />}></Route>
            <Route exact path="/general" element={<News key="general" progress={progress} setProg={setProgress} pageSize={9} category="general" />}></Route>
            <Route exact path="/sports" element={<News key="sports" progress={progress} setProg={setProgress} pageSize={9} category="sports" />}></Route>
            <Route exact path="/technology" element={<News key="technology" progress={progress} setProg={setProgress} pageSize={9} category="technology" />}></Route>
            <Route exact path="/business" element={<News key="business" progress={progress} setProg={setProgress} pageSize={9} category="business" />}></Route>
            <Route exact path="/health" element={<News key="health" progress={progress} setProg={setProgress} pageSize={9} category="health" />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" progress={progress} setProg={setProgress} pageSize={9} category="entertainment" />}></Route>
            <Route exact path="/science" element={<News key="science" progress={progress} setProg={setProgress} pageSize={9} category="science" />}></Route>
          </Routes>
        </React.StrictMode>
      </BrowserRouter>
    </>
  )

}

export default NewsChimp
