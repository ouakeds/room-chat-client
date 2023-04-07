import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
      <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginLeft: 10 }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Rechercher une conversation..'
          inputProps={{ 'aria-label': 'Rechercher une conversation..' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
}

export default SearchBar;
