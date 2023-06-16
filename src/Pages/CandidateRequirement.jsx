import React, { useState } from 'react';
import {
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  Chip,
  IconButton,
} from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ label }) => {
  const [searchValue, setSearchValue] = useState('');
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    if (searchValue !== '') {
      setTags([...tags, searchValue]);
      setSearchValue('');
    }
  };

  const handleDeleteTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div>
      <Autocomplete
        freeSolo
        options={[]}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        renderInput={(params) => (
          <TextField {...params} label={label} fullWidth />
        )}
      />
      <div>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onDelete={() => handleDeleteTag(tag)}
            style={{ marginRight: 5 }}
          />
        ))}
      </div>
      <IconButton onClick={handleAddTag}>
        <AddCircleOutlineIcon />
      </IconButton>
    </div>
  );
};

const CandidateRequirementForm = () => {
  const [positions, setPositions] = useState(1);
  const [maxBudget, setMaxBudget] = useState('');

  const handlePositionChange = (value) => {
    setPositions(value);
  };

  const handleAddPosition = () => {
    setPositions(positions + 1);
  };

  const handleRemovePosition = () => {
    if (positions > 1) {
      setPositions(positions - 1);
    }
  };

  const handleMaxBudgetChange = (value) => {
    setMaxBudget(value);
  };

  const handleSearchJD = () => {
    console.log('Search JD button clicked');
  };

  const handleSearchPastRequirements = () => {
    console.log('Search past requirements button clicked');
  };

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <div style={{ margin: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            onClick={handleSearchPastRequirements}
            style={{ width: '100%' }}
          >
            Search Past Requirement
          </Button>
          <TextField label="Job Role" fullWidth style={{ width: '100%' }} />
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                label="Experience From"
                fullWidth
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Experience To"
                fullWidth
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>
          <FormControl fullWidth style={{ width: '100%' }}>
            <InputLabel>Project</InputLabel>
            <Select fullWidth>
              <MenuItem>Project 1</MenuItem>
              <MenuItem>Project 2</MenuItem>
              <MenuItem>Project 3</MenuItem>
            </Select>
          </FormControl>
          <Button>
            <AddCircleOutlineIcon /> Add Project
          </Button>
          <SearchBar label="Primary Skills" />
          <TextField
            label="Required By"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl fullWidth style={{ width: '100%' }}>
            <InputLabel>Employment Type</InputLabel>
            <Select fullWidth>
              <MenuItem>Full-time</MenuItem>
              <MenuItem>Part-time</MenuItem>
              <MenuItem>Contract</MenuItem>
              <MenuItem>Freelance</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ width: '100%' }}>
            <InputLabel>Preferred Gender</InputLabel>
            <Select fullWidth>
              <MenuItem>Male</MenuItem>
              <MenuItem>Female</MenuItem>
              <MenuItem>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            onClick={handleSearchJD}
            style={{ width: '100%' }}
          >
            Search JD
          </Button>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={2}>
              <Button onClick={handleAddPosition}>+</Button>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Number of Positions"
                value={positions}
                onChange={(e) => handlePositionChange(e.target.value)}
                fullWidth
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={2}>
              <Button onClick={handleRemovePosition}>-</Button>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth style={{ width: '100%' }}>
                <InputLabel>Job Location</InputLabel>
                <Select fullWidth>
                  <MenuItem>Location 1</MenuItem>
                  <MenuItem>Location 2</MenuItem>
                  <MenuItem>Location 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <div style={{ width: '100%' }}>
            <FormControl fullWidth>
              <InputLabel>Max Budget</InputLabel>
              <Select
                value={maxBudget}
                onChange={(e) => handleMaxBudgetChange(e.target.value)}
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    <Button
                      variant="outlined"
                      size="small"
                      disableRipple
                      style={{ minWidth: 0 }}
                    >
                      Currency
                    </Button>
                  </InputAdornment>
                }
              >
                <MenuItem>Action</MenuItem>
              </Select>
            </FormControl>
          </div>
          <SearchBar label="Secondary Skills" />
          <FormControl fullWidth style={{ width: '100%' }}>
            <InputLabel>Position Level</InputLabel>
            <Select fullWidth>
              <MenuItem>Level 1</MenuItem>
              <MenuItem>Level 2</MenuItem>
              <MenuItem>Level 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ width: '100%' }}>
            <InputLabel>Work Mode</InputLabel>
            <Select fullWidth>
              <MenuItem>Mode 1</MenuItem>
              <MenuItem>Mode 2</MenuItem>
              <MenuItem>Mode 3</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Period of Contract (if applicable)"
            fullWidth
            style={{ width: '100%' }}
          />
        </Grid>
      </Grid>

      <div style={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginRight: '10px' }}
        >
          Submit
        </Button>
        <Button variant="contained" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CandidateRequirementForm;
