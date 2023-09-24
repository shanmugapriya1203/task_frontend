
import { Outlet, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import AboutPage from './pages/About';
import TaskComponent from './components/TaskComponent';
import Team from './pages/Team';
import Settings from './pages/Settings';
import Calendar from './pages/Calendar';


function Layout(){
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

function App() {
  return (
    <div className='bg-black-100'>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/tasks" element={<TaskComponent/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/calendar" element={<Calendar/>} />
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
