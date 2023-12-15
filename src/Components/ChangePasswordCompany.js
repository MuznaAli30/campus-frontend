import React, { useState } from 'react';
import axios from 'axios'; 
import { Api } from '../Api/Api';
import toast, { Toaster } from 'react-hot-toast';
import { Link,useParams, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';

export default function ChangePasswordCompany() {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const params=useParams()

  const navigate=useNavigate()
  const handleLogout = () => {

    Cookies.remove('role');
    Cookies.remove('username');
    navigate('/Login');
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;

    // Validation for password complexity
    if (!passwordRegex.test(newPassword)) {
      toast.error('Password should contain at least 7 characters including at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }
    
        try {
            const response = await axios.post(`${Api}/registration/CompanyPassword`, { email, currentPassword, newPassword });
            toast.success('Password changed successfully!');
            setEmail(''); setCurrentPassword(''); setNewPassword('');
          } catch (error) {
            toast.error('Error changing password');
          }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarItems = [
    { label: <><i className="fa-solid fa-house-user"></i> Home</>, path: `/DashCompany/${params.id}` },
    { label: <><i className="fa-solid fa-key"></i> Change Password</>, path: `/ChangePasswordCompany/${params.id}` },
    { label: <><i className="fa-solid fa-image-portrait"></i> Post Jobs</>, path: `/PostJobs/${params.id}` },
    { label: <><i className="fa-solid fa-users"></i> View Students</>, path: `/ViewStudents/${params.id}` },
    // { label: <><i className="fa-solid fa-right-from-bracket fa-rotate-180"></i> Log Out</>, path: '/Login' },
  ];

  const openTooltip = sidebarOpen ? 'Close Sidebar' : 'Open Sidebar';

  return (
    <div className="flex h-screen relative bg-[url('https://images.unsplash.com/photo-1541323184943-9246488c6f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">
      {/* Sidebar */}
      <div
        className={`bg-black text-xl text-white max-sm:text-xs max-sm:w-32 w-80 py-8 px-4 fixed h-full transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button className="text-black max-sm:text-xs absolute top-3 right-3 bg-white rounded-full p-2 font-medium" onClick={() => setSidebarOpen(!sidebarOpen)} title={openTooltip}>
          Close
        </button>
        <h1 className="text-4xl text-center m-auto font-semibold mb-6 font-bold">
          <i className="fa-regular fa-user"></i>
        </h1>
        <ul className="">
          {sidebarItems.map(item => (
            <li key={item.label} className="mb-4 cursor-pointer">
              <Link to={item.path} className="block p-2 text-white hover:text-black hover:bg-gray-200 font-medium">
                {item.label}
              </Link>
            </li>
          ))}
              <li className="mb-4 cursor-pointer p-2 text-white hover:text-black hover:bg-gray-200 font-medium">
  <Link to='/login' onClick={handleLogout}>
    <i className="fa-solid fa-right-from-bracket fa-rotate-180 block p-2 text-white hover:text-black hover:bg-gray-200 font-medium"></i>
    Log Out
  </Link>
</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`flex-grow p-8 max-sm:ml-[19%] ml-32 sm:ml-10 transition-transform duration-300 ease-in-out`}>
        <button
          className="text-white max-sm:text-xs absolute top-3 left-3 bg-black rounded-full p-2 font-medium"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ display: sidebarOpen ? 'none' : 'block' }}
          title={openTooltip}
        >
          Open
        </button>

        <h2 className="text-2xl m-auto text-center max-sm:ml-12 ml-64 max-sm:text-xs font-bold text-white bg-black mb-4 p-5">Welcome to Company's Dashboard</h2>

        <div className="flex items-center justify-center">
          <div className="w-full p-4 bg-white mb-10 rounded shadow ml-64 max-sm:ml-12">
            <h3 className="text-xl font-semibold mb-4 text-center max-sm:text-sm"><i className="fa-solid fa-key"></i> Change Password</h3>

            <div className="mb-2">
              <input
                placeholder='email@gmail.com'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded border"
              />
            </div>

            <div className="mb-2">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-[98%] px-3 py-2 rounded border"
              />
              <i
                className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer', marginLeft: '0.5%' }}
              ></i>
            </div>

            <div className="mb-2">
              <input
                placeholder='New Password'
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-[98%] px-3 py-2 rounded border"
              />
              <i
                className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer', marginLeft: '0.5%' }}
              ></i>
            </div>

            <button className="block mx-auto max-sm:text-xs mt-4 bg-blue-500 text-white rounded p-2" onClick={handleChangePassword}>
              Change Password
            </button>
          </div>
        </div>
        <div className="flex mb-5 ml-64 max-sm:ml-12 max-sm:flex-col ">
          <div className="w-1/2 mr-4 max-sm:w-full max-sm:mb-5 p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2 max-sm:text-sm"><i className="fa-solid fa-image-portrait"></i> Post Jobs</h3>
          </div>
          <div className="w-1/2 max-sm:w-full p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2 max-sm:text-sm"><i className="max-sm:text-sm fa-solid fa-users"></i> View Students</h3>
          </div>
        </div>
        <div className="flex ml-64 max-sm:ml-12 max-sm:flex-col">
          <div className="w-1/2 max-sm:w-full p-4 bg-white rounded shadow mr-4 ">
            <h3 className="text-xl font-semibold mb-2 max-sm:text-sm max-sm:text-sm"><i className="max-sm:text-sm fa-solid fa-key"></i> Change Password</h3>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}
