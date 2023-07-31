import { TextField } from '@mui/material';
import './filterInput.css';
import { ChangeEvent, ReactElement } from 'react';

interface filterInputProps {
  filterValue?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput = ({ value, onChange }: filterInputProps): ReactElement => {
  return (
    <TextField
      label="Filter podcasts..."
      id="outlined-size-small"
      size="small"
      className="inputSearch"
      value={value}
      onChange={onChange}
      type="search"
    />
  );
};

export default FilterInput;
