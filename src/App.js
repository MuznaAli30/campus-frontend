
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import ChangePassword from './Components/ChangePassword';
import ChangePasswordCompany from './Components/ChangePasswordCompany';
import Registration2 from './Components/Registration2';
import DashStudent from './Components/DashStudent';
import DashCompany from './Components/DashCompany';
import DashAdmin from './Components/DashAdmin';
import AdminManageUsers from './Components/AdminManageUsers';
import AdminManageCompanies from './Components/AdminManageCompanies';
import CompanyViewStudents from './Components/CompanyViewStudents';
import RegSt from './Components/RegSt';
import PostJobs from './Components/PostJobs';
import ApplyJobs from './Components/ApplyJobs';
import Registration from './Components/Registration';
import ViewCompaniesStudent from './Components/ViewCompaniesStudent';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/ChangePassword/:id' element={<ChangePassword/>}/>
      <Route path='/ChangePasswordCompany/:id' element={<ChangePasswordCompany/>}/>
      <Route path='/DashStudent/:id' element={<DashStudent/>}/>
      <Route path='/DashCompany/:id' element={<DashCompany/>}/>
      <Route path='/DashAdmin' element={<DashAdmin/>}/>
      <Route path='/ManageUsers' element={<AdminManageUsers/>}/>
      <Route path='/ManageCompanies' element={<AdminManageCompanies/>}/>
      <Route path='/ViewStudents/:id' element={<CompanyViewStudents/>}/>
      <Route path='/RegSt/:id' element={<RegSt/>}/>
      <Route path='/postJobs/:id' element={<PostJobs/>}/>
      <Route path='/ApplyJobs/:id' element={<ApplyJobs/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/registration2/:id' element={<Registration2/>}/>
      <Route path='/viewcompanies/:id' element={<ViewCompaniesStudent/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;