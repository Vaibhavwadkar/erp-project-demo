import Navbar from "./Navbar";
//import logo from './logo.svg';
import './App.css';
import CandidateRequirement from './Pages/CandidateRequirement';
import Sidenav from './Sidenav';
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import * as React from 'react'
import CreateProject from './CreateProject';

import ScheduleInterview from './Pages/ScheduleInterview';


function App() {
  return (
    <Navbar></Navbar>
    // <div className="App">
    //   <div>
    //     <h1>Create New Project</h1>
    //     {/* <CreateProject /> */}
    //     {/* <Sidenav /> */}
    //     {/* <CandidateRequirement /> */}
    //     {/* <ScheduleInterview /> */}

    //   </div>
    // </div>
  );
}
export default App;

