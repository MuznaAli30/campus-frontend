import React, { useState,useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Api } from '../Api/Api';
import { Link, useParams, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';

export default function RegSt() {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [contact, setContact] = useState('');
  const [fileLink, setFileLink] = useState();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const params=useParams()
  const navigate=useNavigate()
  
  const handleLogout = () => {
    Cookies.remove('username'); 
    Cookies.remove('role');
  }


  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${Api}/student/singleStd/${params.id}`);
            setName(response.data.contact.name)
            setFatherName(response.data.contact.fatherName)
            setContact(response.data.contact.contact)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);


  const sidebarItems = [
    { label: <><i className="fa-solid fa-house-user"></i> Home</>, path: `/DashStudent/${params.id}` },
    { label: <><i className="fa-regular fa-user-circle"></i> Create Profile</>, path: `/RegSt/${params.id}` },
    { label: <><i className="fa-solid fa-building"></i> View Companies</>, path: `/ViewCompanies/${params.id}` },
    { label: <><i className="fa-solid fa-briefcase"></i> Apply for Jobs</>, path: `/ApplyJobs/${params.id}` },
    { label: <><i className="fa-solid fa-key"></i> Change Password</>, path: `/ChangePassword/${params.id}` },
    // { label: <><i className="fa-solid fa-right-from-bracket fa-rotate-180"></i>  Log Out</>, path: '/Login' },
  ];
  const openTooltip = sidebarOpen ? 'Close Sidebar' : 'Open Sidebar';
//mineeee
  // const profileSumbit = async (e) => {
  //   console.log("file", fileLink)
  //   e.preventDefault();
  //   console.log("info", e)
  //   console.log("id",name, fatherName, contact, fileLink)
  //   try {
  //     const formData = new FormData();
  
  //     // Append the file to the FormData
  //     formData.append('file', fileLink);
  
  //     // Append other data to the FormData
  //     formData.append('name', name);
  //     formData.append('fatherName', fatherName);
  //     formData.append('contact', contact);
  //     console.log("msg", formData)
  //     // Make the axios request with the FormData
  //     const response = await axios.put(`${Api}/student/updtStd/${params.id}`, formData);
  
  //     // Handle the response as needed
  //     console.log(response.data);
  //   } catch (error) {
  //     // Handle errors
  //     console.error('Error uploading file:', error);
  //   }
  //   console.log("id",name, fatherName, contact)
  //   toast.success('Updated successfully!');
  //   // setName(''); setFatherName(''); setContact(''); setFileLink(null);
  // }


  //for check
  const profileSumbit = async (e) => {
    e.preventDefault();
    console.log('Fields:', name, fatherName, contact, fileLink);

    // Validation for non-empty fields
    if (!name || !fatherName || !contact || !fileLink) {
      toast.error('Please fill out all the fields');
      return;
    }
  
    // Validation checks for Name and Father Name
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      toast.error('Name should contain only letters and spaces');
      return;
    }
  
    if (!/^[a-zA-Z\s]+$/.test(fatherName)) {
      toast.error('Father Name should contain only letters and spaces');
      return;
    }
  
    // Validation check for Contact Number
    const contactRegex = /^[0-9]{11}$/;
    if (!contactRegex.test(contact)) {
      toast.error('Please enter a valid 10-digit contact number');
      return;
    }
  
    try {
      const formData = new FormData();
  
      // Append the file to the FormData
      formData.append('file', fileLink);
  
      // Append other data to the FormData
      formData.append('name', name);
      formData.append('fatherName', fatherName);
      formData.append('contact', contact);
  
      // Make the axios request with the FormData
      const response = await axios.put(`${Api}/student/updtStd/${params.id}`, formData);
  
      // Handle the response as needed
      console.log(response.data);
      toast.success('Updated successfully!');
      
      // Clear form fields after successful submission
      setName('');
      setFatherName('');
      setContact('');
      setFileLink(null);
    } catch (error) {
      // Handle errors
      console.error('Error uploading file:', error);
      toast.error('Error updating. Please try again.');
    }
  };

  
  const xyz = (abc)=>{
    console.log("helo",abc.target.files[0])
    setFileLink(abc.target.files[0])
  }
  return (
    <div className="flex h-screen relative  bg-[url('https://images.unsplash.com/photo-1541323184943-9246488c6f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">
      {/* Sidebar */}
      <div
        className={`bg-black text-xl text-white max-sm:text-xs max-sm:w-32 w-80 py-8 px-4 fixed h-full transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
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

        <h2 className="text-2xl m-auto text-center max-sm:ml-12 ml-64 max-sm:text-xs font-bold text-white bg-black mb-4 p-5">Your Dashboard</h2>

        <form className="ml-64 max-sm:ml-12 bg-white mb-5 p-2" onSubmit={profileSumbit}>
          <h2 className="text-2xl font-semibold mb-4 text-center max-sm:text-xs font-bold p-5">Registration</h2>
          <div className="mb-5">
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2"
            />
          </div>

          <div className="mb-5">
            <input
              placeholder="Father Name"
              type="text"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
              className="w-full p-2"
            />
          </div>
          <div className="mb-5">
            <input
              placeholder="Contact Number"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-2"
            />
          </div>

          <div>
            <input
              placeholder="Resume"
              type="file"
              onChange={xyz}
              className="w-full p-2"
            />
          </div>
          <button type="submit" className="block mx-auto max-sm:text-xs mt-4 bg-blue-500 text-white rounded p-2">
            Update
          </button>
        </form>
        <div className="flex mb-5 ml-64 max-sm:ml-12 max-sm:flex-col text-xl">
          <div className="w-1/2 max-sm:w-full p-4 bg-white rounded shadow mr-4 max-sm:mb-5 ">
            <h3 className="font-semibold mb-2 max-sm:text-sm"><i className="max-sm:text-sm fa-solid fa-building"></i> View Companies</h3>
          </div>
          <div className="w-1/2 max-sm:w-full p-4 bg-white rounded shadow">
            <h3 className="font-semibold mb-2 max-sm:text-sm"><i className="max-sm:text-sm fa-solid fa-briefcase"></i> Change Password</h3>
          </div>
        </div>
        <div className="flex ml-64 max-sm:ml-12 max-sm:flex-col max-sm:mb-5 text-xl">
          <div className="w-1/2 max-sm:w-full p-4 bg-white rounded shadow mr-4 max-sm:mb-5">
            <h3 className=" font-semibold mb-2max-sm:text-sm max-sm:text-sm "><i className="max-sm:text-sm fa-solid fa-key"></i> Apply For Jobs</h3>
          </div>
          <div className="w-1/2  p-4 max-sm:w-full bg-white rounded shadow">
            <h3 className="font-semibold mb-2 max-sm:text-sm"><i className="max-sm:text-sm fa-regular fa-user-circle"></i> Create Profile</h3>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

