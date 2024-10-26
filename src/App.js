//import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Login from './components/login';
import Dashboard from './components/dashboard';
import Model from './components/model';
import Sidebar from './components/sidebar';
import Forms from './components/forms';
import Forms2 from './components/forms2';
import Forms3 from './components/forms3';
import Review from './components/preview-form';
import Upload from './components/upload';
import SignIn from './components/login2';
import First from './components/first-page';
import Last from './components/last-page';




function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Forms' element={<Forms />} />
        <Route path='/Forms2' element={<Forms2 />} />
        <Route path='/Forms3' element={<Forms3 />} />
        <Route path='/Preview' element={<Review />} />
        <Route path='/Results' element={<Upload />} />
        <Route path='/' element={<SignIn />} />
        <Route path='/First' element={<First />} />
        <Route path='/Last' element={<Last />} />
        <Route path='/Logout' element={<Model />} />
      </Routes>
    </Router>


  );
}

export default App;
