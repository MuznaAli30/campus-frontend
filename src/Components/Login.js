import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Api } from '../Api/Api';
import Cookies from 'js-cookie';

export default function Login() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();



  //mineeee
  // const handleLogin = async (e) => {
  //   e.preventDefault('');
  //   try {
  //     const response = await axios.post(`${Api}/registration/signin`, {
  //       username,
  //       password,
  //     });

  //     if (response.status === 200) {
  //       const { result } = response.data;

  //       if (result && result.role === 'student') {
  //         // Navigate to student dashboard
  //         navigate('/DashStudent') }
  //       else if (result && username === 'Admin' && password === "Admin1"){
  //           navigate('/DashAdmin') 
  //         }
  //        else if (result && result.role === 'company') {
  //         // Navigate to company dashboard
  //         navigate('/DashCompany') 

  //       }
  //       else {
  //         navigate('/DashAdmin')
  //       }
  //     } else {
  //       toast.error('Incorrect password or user not found');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     toast.error("Incorrect password and username" )
  //     // Handle errors here
  //   }
  // };


  // for check WITH COOKIES
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${Api}/registration/signin`, {
        username,
        password,
      });
      
      if (response.status === 200) {
        const { result } = response.data;
        const { role } = response.data;
        console.log(role)

        // console.log(result)
        if ( role === 'admin') {
          Cookies.set('username', username);
          Cookies.set('role', role);
          navigate('/DashAdmin');
        }
        else if (result && result.role === 'student') {
          Cookies.set('username', username);
          Cookies.set('role', result.role);
          navigate(`/DashStudent/${result._id}`);

        } else if (result && result.role === 'company') {
          Cookies.set('username', username);
          Cookies.set('role', result.role);
          navigate(`/DashCompany/${result._id}`);

        } else {
          toast.error('Incorrect password or user not found');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Incorrect password and username");
    }
  };



  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')]">
      <div className='mb-10 opacity-80 hover:opacity-95 bg-gray-400 max-sm:w-[90%] shadow-2xl w-[40%] rounded-2xl h-[60vh]'>
        <div className='m-auto text-center'><i className="fa-solid fa-unlock-keyhole font-medium text-5xl mb-16 mt-10"></i></div>
        <div className='py-[1%]'>
          <div className='mb-10 m-auto text-center space-x-4 text-2xl '>
            <input
              className='sm:w-[50%] p-2 max-sm:w-[50%] rounded-xl max-sm:w-[80%]'
              type="text"
              id="username"
              placeholder="Enter ID"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className='mb-10 m-auto text-center space-x-4 text-2xl relative'>
            <input
              className='sm:w-[43%] p-2 rounded-xl max-sm:w-[67%]'
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
              onClick={togglePasswordVisibility}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>

          <div className='m-auto text-center'>
            <span><button className='font-bold bg-blue-500 max-sm:text-sm max-sm:w-[80%] text-white hover:text-black py-2 rounded-lg w-[50%]' onClick={handleLogin}>Login</button></span>
          </div>
          <div className='m-auto text-center mt-12'>
            <span>
              <button className='font-bold bg-blue-500 max-sm:text-sm max-sm:w-[80%] text-white hover:text-black py-2 rounded-lg w-[50%]'><Link to="/"><i className="fa-solid fa-house"></i> Home Page</Link></button>
            </span>
          </div>

        </div>
        <Toaster />
      </div>
    </div>
  )
}