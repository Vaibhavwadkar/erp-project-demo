//import {  form } from 'formik'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'


function ScheduleInterview() {
    const [level, modes, meeting, setMeeting] = React.useState('');

    const handleChange = (event) => {
      setMeeting(event.target.value);
    };
   
    return (
      
        <div>
             
            <h2>Schedule Interview</h2>
            <form>
            <TextField id="outlined-basic" label="Requirement" variant="outlined" className="form-input" style={{width: '240', height: '43'}}/>
            <TextField id="outlined-basic" label="Candidate Name" variant="outlined" className="form-input" /><br/>
            
            <br></br>
            {/* <label htmlFor="">Interview Level: </label> */}
            
           <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Interview Level</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={level}
          style={{width: 240 , height: 43}}
          label="Level"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem >Screening</MenuItem>
          <MenuItem >L1</MenuItem>
          <MenuItem >L2</MenuItem>
        </Select>
        
      </FormControl>
                       
                        
            {/* <label htmlFor="">Interview Mode: </label> */}
            
            <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Interview Mode</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={modes}
          style={{width: 240 , height: 43}}
          label="Modes"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
         
          <MenuItem >Online</MenuItem>
          <MenuItem >Offline</MenuItem>
        </Select>
        
      </FormControl>
      <br></br>
      
            {/* <label htmlFor="">Meeting Platform: </label> */}
           

<FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Meeting Platform</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={meeting}
          style={{width: 240 , height: 43}}
          label="Meeting"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem >Team</MenuItem>
          <MenuItem >Meet</MenuItem>
          <MenuItem >Zoom</MenuItem>
        </Select>
        
      </FormControl>
      <TextField id="outlined-basic" label="" variant="outlined" className="form-input" type='date'/>
      <TextField id="outlined-basic" label="Time" variant="outlined" className="form-input" type='time'/><br></br>
      
            </form>

            <Button variant="contained" size="medium">
          Submit
        </Button>
        <Button variant="contained" size="medium" style={{backgroundColor: 'red', color: 'white'}}>
          Cancel
        </Button>
       
        </div>
    );
}

export default ScheduleInterview;