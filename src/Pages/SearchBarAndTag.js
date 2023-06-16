const SearchBar = () => {
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
            <TextField {...params} label="Skills" fullWidth />
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
  