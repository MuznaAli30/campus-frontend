// import React, { useState, useEffect} from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Api } from '../Api/Api';

// export default function Registration2() {

//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [username,setUsername] = useState('');
//   const params = useParams();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//       const fetchData = async () => {
//           try {
//               const response = await axios.get(`${Api}/registration/allStudents/${params.id}`);
//               setUsername(response.data.registration.username)
//           } catch (error) {
//               console.error('Error fetching data:', error);
//           }
//       };

//       fetchData();
//   }, []);

//   const handleUpdateDone = async (e) => {
//     e.preventDefault('')
//       const response = await axios.put(`${Api}/registration/updtStudents/${params.id}`, { username });
//       toast.success('Updated successful!');
      
//   }


//   const sidebarItems = [
//     { label: <><i className="fa-solid fa-house-user"></i> Home</>, path: 'DashAdmin' },
//     { label: <><i className="fa-solid fa-address-card"></i> Registration</>, path: "Registration" },
//     { label: <><i className="fa-solid fa-users"></i> Manage Users</>, path: "manageusers" },
//     { label: <><i className="fa-solid fa-building"></i> Manage Companies</>, path: "managecompanies" },
//     { label: <><i className="fa-solid fa-key"></i> Change Password</>, path: '/AdminPasswordPage' },
//     { label: <><i className="fa-solid fa-right-from-bracket fa-rotate-180"></i>  Log Out</>, path: '/Login' },
//   ];


//   const openTooltip = sidebarOpen ? 'Close Sidebar' : 'Open Sidebar';

//   return (
//     <div className="flex h-screen relative  bg-[url('https://images.unsplash.com/photo-1541323184943-9246488c6f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">
//       {/* Sidebar */}
//       <div
//         className={`bg-black text-xl text-white max-sm:text-xs max-sm:w-32 w-80 py-8 px-4 fixed h-full transition-transform duration-300 ease-in-out ${
//           sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <button className="text-black max-sm:text-xs absolute top-3 right-3 bg-white rounded-full p-2 font-medium" onClick={() => setSidebarOpen(!sidebarOpen)} title={openTooltip}>
//           Close
//         </button>
//         <h1 className="text-4xl text-center m-auto font-semibold mb-6 font-bold">
//           <i className="fa-regular fa-user"></i>
//         </h1>

//         <ul className="">
//           {sidebarItems.map(item => (
//             <li key={item.label} className="mb-4 cursor-pointer">
//               <a href={item.path} onClick={item.onClick} className="block p-2 text-white hover:text-black hover:bg-gray-200 font-medium">
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className={`flex-grow p-8 max-sm:ml-[19%] ml-32 sm:ml-10 transition-transform duration-300 ease-in-out`}>
//         <button
//           className="text-white max-sm:text-xs absolute top-3 left-3 bg-black rounded-full p-2 font-medium"
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           style={{ display: sidebarOpen ? 'none' : 'block' }}
//           title={openTooltip}
//         >
//           Open
//         </button>

//         <h2 className="text-2xl m-auto text-center max-sm:ml-12 ml-64 max-sm:text-xs font-bold text-white bg-black mb-4  p-5">Welcome to the Admin Dashboard</h2>

//         <form className="ml-64 max-sm:ml-12 bg-white mb-5 p-2">
//           <h2 className="text-2xl font-semibold mb-4 text-center max-sm:text-xs font-bold p-5">Update Registration</h2>


//             <div className="mb-2">

//             {data.map((dataa, index) => (
            
//             <div key={index}> 
//               <p>username : {dataa.username}</p>
//               <p>email : {dataa.email}</p>
             
//               <br/>
//                       </div>
        
//         ))}
//               <input
//                 placeholder='User Name'
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="w-full px-3 py-2 rounded border"
//               />
//             </div>
            
          
//           <button type="submit" className="block mx-auto max-sm:text-xs mt-4 bg-blue-500 text-white rounded p-2" onClick={handleUpdateDone}>
//             Done
//           </button>
//         </form>
//         {/* Additional content here */}
//         <div className="flex mb-5 ml-64 max-sm:ml-12 max-sm:flex-col">
//           <div className="w-1/2 max-sm:w-full p-4 bg-white rounded shadow mr-4 max-sm:mb-5 ">
//             <h3 className="text-xl font-semibold mb-2 max-sm:text-sm"><i className="max-sm:text-sm fa-solid fa-building"></i> Manage Companies</h3>
            
//           </div>
//           <div className="w-1/2 max-sm:w-full p-4 bg-white rounded shadow">
//             <h3 className="text-xl font-semibold mb-2 max-sm:text-sm"><i className=" max-sm:text-sm fa-solid fa-users"></i> Manage Users</h3>
            
//           </div>
//         </div>
//       </div>
//       <Toaster/>
//     </div>
//   );
// }
