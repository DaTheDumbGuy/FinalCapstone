import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayUsers from './components/pages/DisplayUsers';
import Header from './components/common/Header';
import './styles/global.css'
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/users" element={<DisplayUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
