import React from 'react'
import { Grid, Button, TextField, makeStyles, useTheme, Select, OutlinedInput, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';

const useStyle = makeStyles(theme => ({
  root : {
    '& .MuiButtonBase-root' : {
     
      margin:theme.spacing(1)
    },
    '& .MuiInputBase-root' : {
     
      margin:theme.spacing(1)
    }
  }
}) )

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'SHOULD BE LIST OF PROJECTS'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function CandidateRequirement() {

    // const [values, setValues] = useState();
    const textFieldStyle = {
      width: '115px', // Set the desired width
      
    };

    const normaltextFieldStyle = {
      width: '260px', // Set the desired width
      
    };  

    
    const classes = useStyle();

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

  return (
    
    <form className={classes.root}>
      
        <Grid container>
            <Grid item xs={6}>
             <Button variant="outlined" href="#outlined-buttons">Search Past Requirement</Button><br/>
             <TextField  id="outlined-size-small" label="Job Role" variant="outlined"  size="small" style={normaltextFieldStyle}/><br/>
             <TextField  id="outlined-size-small" label="Experience" variant="outlined"  size="small" style={textFieldStyle}/> <b>To</b> <TextField id="outlined-basic" label="Experience" variant="outlined"  size="small" style={textFieldStyle}/><br/>
                
             <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          style={{width: 240, height: 43}}
          
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select><AddCircleOutlineIcon style={{fontSize: 45}}/>
              <br/>
              <TextField  id="outlined-size-small" label="Primary Skills" variant="outlined"  size="small" style={normaltextFieldStyle}/><AddCircleOutlineIcon style={{fontSize: 45}}/><br/>
              <Box
                  sx={{
                    width: 240,
                    height: 100,
                    border: '1px solid lightgrey',
                    marginLeft: '5px',
                  }}
                >
                  <TextField
                    id="outlined-search"
                    label="Search Primary Skills"
                    type="search"
                    variant="outlined"
                    style={{ width: '100%', height: '20%' }}
                />
              </Box> 

              <TextField  id="outlined-size-small" type="date" variant="outlined"  size="small" style={normaltextFieldStyle}/><br/>
        
              <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Interview Level</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          
          style={{width: 240 , height: 43}}
          label="Employment Type"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem >Employment Type</MenuItem>
          <MenuItem >Permanant</MenuItem>
          <MenuItem >Contract</MenuItem>
          <MenuItem >Part Time</MenuItem>
          <MenuItem >Freelance</MenuItem>
          <MenuItem >Internship</MenuItem>
          <MenuItem >Apprenticeship</MenuItem>
          <MenuItem >Remote</MenuItem>
          
        </Select>
        
      </FormControl>
   
        </Grid>


            <Grid item xs={6}>
             <Button variant="outlined" href="#outlined-buttons">Search JD</Button>
            </Grid>
        </Grid>

    </form>
  )
}
