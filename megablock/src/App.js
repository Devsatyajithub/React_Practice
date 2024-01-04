//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import{ useDispatch} from 'react-redux';
import './App.css';
import authService from "./appwrite/auth";
import { logout } from "./store/authSlice";
//import  header  from './components';
//import footer from './components';

function App() {

const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(() => 
 {
  authService.getCurrentUser()
  .then((userData) =>{
    if (userData) {
      // eslint-disable-next-line no-undef
      dispatch(login({userData}))
    } else{
      dispatch(logout())
    }
  })
  .finally(() => setLoading(false))
 },[dispatch])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap 
    content-between bg-grey-400'>
      <div className='w-full block'>
        <header />
        <footer />

      </div>
    </div>
    
  ) :null
  
}

export default App;
