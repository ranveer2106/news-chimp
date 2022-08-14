import React, { Component } from 'react';
import Navbar from './components/navbar';
import News from './components/news';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// import Btns from './components/btns';


export class gorillanews extends Component {

  state = {
    progress: 2
  }

  setProg = (progress) => {
    this.setState({ progress: progress })
    return progress
  }

  render() {

    return (
      <>
        <Router>
          <React.StrictMode>

            <div>
              <Navbar />
            </div>
            <div>

              <LoadingBar
                color='#f11946'
                progress={this.state.progress}
                onLoaderFinished={() => this.setProg(0)}
              />
            </div>
            <Routes>
              <Route exact path="/" key="1" element={<News progress={this.state.progress} setProg={this.setProg} pageSize={3} category="general" />}></Route>
              <Route exact path="general" key="2" element={<News progress={this.state.progress} setProg={this.setProg} pageSize={3} category="general" />}></Route>
              <Route exact path="sports" key="3" element={<News progress={this.state.progress} setProg={this.setProg} pageSize={3} category="sports" />}></Route>
              <Route exact path="technology" key="4" element={<News progress={this.state.progress} setProg={this.setProg} pageSize={3} category="technology" />}></Route>
              <Route exact path="business" key="5" element={<News progress={this.state.progress} setProg={this.setProg} pageSize={3} category="business" />}></Route>
              <Route exact path="health" key="6" element={<News progress={this.state.progress} setProg={this.setProg} pageSize={3} category="health" />}></Route>
              <Route exact path="entertainment" key="7" element={<News progress={this.state.progress} setProg={this.setProg} pageSize={3} category="entertainment" />}></Route>
              <Route exact path="science" key="8" element={<News progress={this.state.progress} setProg={this.setProg} pageSize={3} category="science" />}></Route>
            </Routes>
          </React.StrictMode>
        </Router>
      </>
    )
  }
}

export default gorillanews
