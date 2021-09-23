import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { IUser } from '../../pages/emails';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { StyledStack } from './styled';

interface IEmailMultiSelect {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const EmailMultiSelect: React.FC<IEmailMultiSelect> = ({ users, setUsers }) => {
  const handleOnChange = (_: any, value: IUser[]) => {
    setUsers(value);
  };

  return (
    <StyledStack>
      <Autocomplete
        onChange={handleOnChange}
        multiple
        size="small"
        options={users}
        disableCloseOnSelect
        getOptionLabel={(option) => option.email}
        defaultValue={users}
        renderInput={(params) => <TextField {...params} variant="standard" label="Users email" />}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
            {option.email}
          </li>
        )}
      />
    </StyledStack>
  );
};

export default EmailMultiSelect;
