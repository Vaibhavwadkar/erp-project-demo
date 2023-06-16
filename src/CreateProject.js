// CreateProject
import './App.css';
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import * as React from 'react'

export default function CreateProject() {
    const [level, setLevel] = React.useState('');

    const handleChange = (event) => {
        setLevel(event.target.value);
    };
    return (
        <div className="form-container">
            <div className="form-part">
                <form>

                    {/*Project Code:<input type="text" id="id" name="id" className="form-input" /><br/>
Project Name:<input type="text" id="name" name="name" className="form-input" /><br/>
Project Status:<input type="text" id="code" name="code" className="form-input" /><br/>
Project Description:<input type="text" id="description" name="description" className="form-input" /><br/>
Project Domain:<input type="text" id="domain" name="domain" className="form-input" /><br/>
Project Manager:<input type="text" id="domain" name="domain" className="form-input" /><br/>
  <TextField id="outlined-basic" label="Project Manager" variant="outlined" className="form-input" /><br/>*/}

                    <TextField id="outlined-basic" label="Project Code" variant="outlined" className="form-input" /><br />
                    <TextField id="outlined-basic" label="Project Name" variant="outlined" className="form-input" /><br />
                    <TextField id="outlined-basic" label="Project Description" variant="outlined" className="form-input" /><br />
                    <TextField id="outlined-basic" label="Project Manager" variant="outlined" className="form-input" /><br />


                    <TextField id="outlined-basic" label="Delivery Manager" variant="outlined" className="form-input" /><br />
                    <TextField id="outlined-basic" label="Delivery Unit" variant="outlined" className="form-input" /><br />
                    <TextField id="outlined-basic" label="Business Unit" variant="outlined" className="form-input" /><br />

                    Start Date: <input type='date' name='date' />
                    End Date: <input type='date' name='date' />





                </form>
            </div>


            <div className="form-part">
                <form>

                    {/*Customer id:<input type="text" id="id" name="id" className="form-input" /><br/>
Customer Name:<input type="text" id="name" name="name" className="form-input" /><br/>
 Delivery Unit:<input type="text" id="code" name="code" className="form-input" /><br/>
Business Unit:<input type="text" id="description" name="description" className="form-input" /><br/>
Practice:<input type="text" id="domain" name="domain" className="form-input" /><br/>
Delivery Manager:<input type="text" id="domain" name="domain" className="form-input" /><br/>
Customer SPOC:<input type="text" id="domain" name="domain" className="form-input" /><br/>
SPOC Mail:<input type="text" id="domain" name="domain" className="form-input" /><br/> 
  SPOC Contact:<input type="text" id="domain" name="domain" className="form-input" /><br/>*/}


                    <TextField id="outlined-basic" label="Customer Id" variant="outlined" className="form-input" /><br />
                    <TextField id="outlined-basic" label="Customer Name" variant="outlined" className="form-input" /><br />
                    <TextField id="outlined-basic" label="Practice" variant="outlined" className="form-input" /><br />
                    <TextField id="outlined-basic" label="Project Domain" variant="outlined" className="form-input" /><br />
                    <TextField id="outlined-basic" label="Customer SPOC" variant="outlined" className="form-input" /><br />
                    <TextField id="outlined-basic" label="SPOC Mail" variant="outlined" className="form-input" /><br />
                    <TextField id="outlined-basic" label=" SPOC Contact" variant="outlined" className="form-input" /><br />


                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={level}
                            style={{ width: 240, height: 43 }}
                            label="Level"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem >New</MenuItem>
                            <MenuItem >In Progress</MenuItem>
                            <MenuItem >Done</MenuItem>
                        </Select>

                    </FormControl>



                </form>
                <Button variant="contained" size="medium">
                    Submit
                </Button>
                <Button variant="contained" size="medium" style={{ backgroundColor: 'red', color: 'white' }}>
                    Cancel
                </Button>
            </div>






        </div>

    );
}
