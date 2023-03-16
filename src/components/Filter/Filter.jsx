import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          name="filter"
          type="text"
          placeholder="Filter contacts"
          value={filter}
          onChange={handleChange}
        />
      </Label>
    </>
  );
};
