import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Api } from '../Api/Api';
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-hot-toast';


export default function ApplyJobs() {
 const [sidebarOpen, setSidebarOpen] = useState(true);
 const [data, setData] = useState([]);
 const params = useParams()
 const [applicants, setApplicants] = useState(params.id)
 const [setApplicantName, setSetApplicantName] = useState('')
 const [appliedJobs, setAppliedJobs] = useState([]);




 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get(`${Api}/job/alljob`);
       setData(response.data);
       console.log(response.data)
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
   { label: <><i className="fa-solid fa-right-from-bracket fa-rotate-180"></i>  Log Out</>, path: '/Login' },
 ];
 const openTooltip = sidebarOpen ? 'Close Sidebar' : 'Open Sidebar';


// minee
//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`${Api}/student/singleStd/${params.id}`);
//             setSetApplicantName(response.data.contact.name)
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };


//     fetchData();
// }, []);



useEffect(() => {
 const fetchData = async () => {
     try {
         const response = await axios.get(`${Api}/job/alljob`);
         setData(response.data);
        
         // Retrieve applied jobs from local storage if available
         const storedAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
         setAppliedJobs(storedAppliedJobs);
     } catch (error) {
         console.error('Error fetching data:', error);
     }
 };
 fetchData();
}, []);





// minee
//  const ApplyForJob = async (id) => {
//    const applicantData = { id: params.id, name: setApplicantName };
//     try {
//      const response = await axios.put(`${Api}/job/updtjob/${id}`, { applicants: applicantData });


//      toast.success('Updated successfully!');
//    } catch (error) {
//      console.error('Error updating job:', error);
//      toast.error('Failed to update job');
//    }
//  };




 const ApplyForJob = async (id) => {
   const applicantData = { id: params.id, name: setApplicantName };


   try {
       await axios.put(`${Api}/job/updtjob/${id}`, { applicants: applicantData });
       toast.success('Updated successfully!');


       // Update the appliedJobs state with the new job ID
       const updatedAppliedJobs = [...appliedJobs, id];
       setAppliedJobs(updatedAppliedJobs);
      
       // Store the updated applied jobs in local storage
       localStorage.setItem('appliedJobs', JSON.stringify(updatedAppliedJobs));
   } catch (error) {
       console.error('Error updating job:', error);
       toast.error('Failed to update job');
   }
};




  return (
   <div className="flex h-screen relative bg-[url('https://images.unsplash.com/photo-1541323184943-9246488c6f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">
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


       <div className="flex items-center justify-center">
         <div className="w-full p-4 bg-white mb-10 rounded shadow ml-64 max-sm:ml-12">
           <h3 className="text-xl font-semibold mb-4 text-center max-sm:text-sm"><i className="fa-solid fa-briefcase"></i> Apply Jobs </h3>
      {/* minee      */}
 {/* {data.map((dataa, index) => (
             <div key={index}>
               <p>Job Title: {dataa.jobTitle}</p>
               <p>Description: {dataa.jobDescription}</p>
               <button
                 type="submit"
                 className="p-2 w-full mb-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => ApplyForJob(dataa._id)}
               >
                 Apply for Job
               </button>
               <br />
             </div>
           ))}  */}


{data.map((dataa, index) => (
   <div key={index}>
       <p>Job Title: {dataa.jobTitle}</p>
       <p>Description: {dataa.jobDescription}</p>
       <button
           type="submit"
           className="p-2 w-full mb-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
           onClick={() => ApplyForJob(dataa._id)}
           disabled={appliedJobs.includes(dataa._id)}
       >
           {appliedJobs.includes(dataa._id) ? 'Applied' : 'Apply for Job'}
       </button>
       <br />
   </div>
))}
         </div>
       </div>
     </div>
   </div>
 );
}









// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { Api } from '../Api/Api';
// import { Link, useParams, useNavigate } from "react-router-dom"
// import { toast } from 'react-hot-toast';
// import Cookies from 'js-cookie';

// export default function ApplyJobs() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [data, setData] = useState([]);
//   const params = useParams()
//   const [applicants, setApplicants] = useState(params.id)
//   const [setApplicantName, setSetApplicantName] = useState('')
//   const [appliedJobs, setAppliedJobs] = useState([]);

//   const navigate=useNavigate()
  
//   const handleLogout = () => {
//     Cookies.remove('username'); 
//     Cookies.remove('role');
//   }


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${Api}/job/alljob`);
//         setData(response.data);
//         console.log(response.data)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

  

//   const sidebarItems = [
//     { label: <><i className="fa-solid fa-house-user"></i> Home</>, path: `/DashStudent/${params.id}` },
//     { label: <><i className="fa-regular fa-user-circle"></i> Create Profile</>, path: `/RegSt/${params.id}` },
//     { label: <><i className="fa-solid fa-building"></i> View Companies</>, path: `/ViewCompanies/${params.id}` },
//     { label: <><i className="fa-solid fa-briefcase"></i> Apply for Jobs</>, path: `/ApplyJobs/${params.id}` },
//     { label: <><i className="fa-solid fa-key"></i> Change Password</>, path: `/ChangePassword/${params.id}` },
//   ];
//   const openTooltip = sidebarOpen ? 'Close Sidebar' : 'Open Sidebar';


// useEffect(() => {
//   const fetchData = async () => {
//       try {
//           const response = await axios.get(`${Api}/job/alljob`);
//           setData(response.data);
          
//           // Retrieve applied jobs from local storage if available
//           const storedAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
//           setAppliedJobs(storedAppliedJobs);
//       } catch (error) {
//           console.error('Error fetching data:', error);
//       }
//   };

//   fetchData();
// }, []);

//   const ApplyForJob = async (id) => {
//     const applicantData = { id: params.id, name: setApplicantName };

//     try {
//         await axios.put(`${Api}/job/updtjob/${id}`, { applicants: applicantData });
//         toast.success('Updated successfully!');

//         // Update the appliedJobs state with the new job ID
//         const updatedAppliedJobs = [...appliedJobs, id];
//         setAppliedJobs(updatedAppliedJobs);
        
//         // Store the updated applied jobs in local storage
//         localStorage.setItem('appliedJobs', JSON.stringify(updatedAppliedJobs));
//     } catch (error) {
//         console.error('Error updating job:', error);
//         toast.error('Failed to update job');
//     }
// };


  
//   return (
//     <div className="flex h-screen relative bg-[url('https://images.unsplash.com/photo-1541323184943-9246488c6f97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">
//       {/* Sidebar */}
//       <div
//         className={`bg-black text-xl text-white max-sm:text-xs max-sm:w-32 w-80 py-8 px-4 fixed h-full transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
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
//               <Link to={item.path} className="block p-2 text-white hover:text-black hover:bg-gray-200 font-medium">
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         <li className="mb-4 cursor-pointer p-2 text-white hover:text-black hover:bg-gray-200 font-medium">
//   <Link to='/login' onClick={handleLogout}>
//     <i className="fa-solid fa-right-from-bracket fa-rotate-180 block p-2 text-white hover:text-black hover:bg-gray-200 font-medium"></i>
//     Log Out
//   </Link>
// </li>
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

//         <h2 className="text-2xl m-auto text-center max-sm:ml-12 ml-64 max-sm:text-xs font-bold text-white bg-black mb-4 p-5">Your Dashboard</h2>

//         <div className="flex items-center justify-center">
//           <div className="w-full p-4 bg-white mb-10 rounded shadow ml-64 max-sm:ml-12">
//             <h3 className="text-xl font-semibold mb-4 text-center max-sm:text-sm"><i className="fa-solid fa-briefcase"></i> Apply Jobs </h3>


// {data.map((dataa, index) => (
//     <div key={index}>
//         <p>Job Title: {dataa.jobTitle}</p>
//         <p>Description: {dataa.jobDescription}</p>
//         <button
//             type="submit"
//             className="p-2 w-full mb-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={() => ApplyForJob(dataa._id)}
//             disabled={appliedJobs.includes(dataa._id)} 
//         >
//             {appliedJobs.includes(dataa._id) ? 'Applied' : 'Apply for Job'}
//         </button>
//         <br />
//     </div>
// ))}
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// }
