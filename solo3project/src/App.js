import './App.css';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Home from './pages/Home'
import Profile from './pages/Profile'
import NavBar from './components/NavBar';
import {Route} from 'react-router-dom'
import {useState, useEffect} from'react'
import axios from 'axios';

// console.log(process.env.REACT_APP_BACKEND_URL);


function App() {

  const [user, setUser] =useState('')

  const verifyUser = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/verify`,{
      headers: {
        Authorization: localStorage.getItem('userId')
      }
    })
    .then((response)=>{ setUser(response.data.user)})
  }
  useEffect(verifyUser, [])

  return (
    <div>
      <NavBar
      user={user} setUser={setUser}
      />
      <hr></hr>
      <Route
      path='/'
      exact
      render={()=>{
        return<Home/>
      }}
      />

      <Route
      path ='/login'
      render={()=>{
        return<Login setUser={setUser}/>
      }}
      />      
      
      <Route
      path='/singup'
      render={()=>{
        return <Singup setUser={setUser}/>
      }}
      />

      <Route
      path='/profile'
      render={()=>{
        return<Profile
        user={user} setUser={setUser}
        />
      }}
      />
      

     
    </div>
  );
}

export default App;
