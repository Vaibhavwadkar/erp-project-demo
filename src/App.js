import './App.css';
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import * as React from 'react'
import CreateProject from './CreateProject';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Create New Project</h1>
        <CreateProject />
      </div>
    </div>
  );
}
export default App;

