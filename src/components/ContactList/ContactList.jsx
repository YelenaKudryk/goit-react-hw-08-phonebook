import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List, Text } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} id={id} name={name} number={number} />
          );
        })}

      {visibleContacts.length === 0 && <Text>No matches found</Text>}

      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
    </List>
  );
};
