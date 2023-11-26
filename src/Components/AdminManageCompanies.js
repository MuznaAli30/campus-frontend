import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Api } from '../Api/Api';
import { Link, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';

export default function AdminManageCompanies() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [data, setData] = useState([]);
    const navigate=useNavigate()

    const handleLogout =  () => {
      
        Cookies.remove('role');
        Cookies.remove('username');
      navigate('/Login');
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${Api}/registration/allCompany`);
          setData(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    const Deletee = async (id) => {
    
        try {
          const response = await axios.delete(`${Api}/registration/dltCompany/${id}`);
    
          setData((prevData) => prevData.filter((dataa) => dataa._id !== id));
        } catch (error) {
          console.error('Error deleting data:', error);
        }
      };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };
  
    const sidebarItems = [
      { label: <><i className="fa-solid fa-house-user"></i> Home</>, path: '/DashAdmin' },
      { label: <><i class="fa-solid fa-address-card"></i> Registration</>,path : "/Registration"},
      { label: <><i className="fa-solid fa-users"></i> Manage Users</>, path: '/ManageUsers'},
      { label: <><i className="fa-solid fa-building"></i> Manage Companies</>, path:'/ManageCompanies'},
    ];

  const openTooltip = sidebarOpen ? 'Close Sidebar' : 'Open Sidebar';
    return (
        <div className="flex h-screen relative  bg-[url('https://images.unsplash.com/photo-1541323184943-9246488c6f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">

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
            <li key1={item} key={item.label} className="mb-4 cursor-pointer">
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

        <h2 className="text-2xl m-auto text-center max-sm:ml-12 ml-64 max-sm:text-xs font-bold text-white bg-black mb-4 p-5">Welcome to the Admin's Dashboard</h2>
      <div className="mb-5 ml-64 max-sm:ml-12 bg-white p-5">

        <h2 className="text-2xl font-semibold mb-4 text-center max-sm:text-xs font-bold ">Manage Users</h2>
        
        {data.map((dataa, index) => (
            
        <div key={index}> 
        <button onClick={() => Deletee(dataa._id)}><i className="text-red-800 fa-solid fa-trash text-46"></i></button>
        {/* <button onClick={() => Deletee(dataa._id)}><i class="text-red-800 fa-solid fa-pen text-46"></i></button> */}
          <p>username : {dataa.username}</p>
          <p>email : {dataa.email}</p>
         
          <br/>
          <div></div>
        </div>
        
        ))}
      </div>
      

     
      <div className="flex mb-5 ml-64 max-sm:ml-12 max-sm:flex-col">
          <div className="w-1/2 max-sm:w-full p-4 bg-white rounded shadow mr-4 max-sm:mb-5 ">
            <h3 className="text-xl font-semibold mb-2 max-sm:text-sm"><i className="max-sm:text-sm fa-solid fa-building"></i> Manage Companies</h3>
          </div>
          <div className="w-1/2 max-sm:w-full p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2 max-sm:text-sm"><i className=" max-sm:text-sm fa-solid fa-users"></i> Manage Users</h3>
          </div>
        </div>
        <div className="flex ml-64 max-sm:ml-12 max-sm:flex-col">
          <div className="w-1/2 max-sm:w-full p-4 bg-white rounded shadow mr-4  max-sm:mb-5">
            <h3 className="text-xl font-semibold mb-2max-sm:text-sm max-sm:text-sm"><i className="max-sm:text-sm fa-solid fa-key"></i> Change Password</h3>
          </div>
          <div className="w-1/2 max-sm:w-full p-4 bg-white rounded shadow mr-4  max-sm:mb-5">
            <h3 className="text-xl font-semibold mb-2max-sm:text-sm max-sm:text-sm"><i class="fa-solid fa-address-card"></i> Registration</h3>
          </div>
        </div>
      </div>
      </div>

    );
  }
