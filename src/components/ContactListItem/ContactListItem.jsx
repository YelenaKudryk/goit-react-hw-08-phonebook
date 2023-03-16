import { useDispatch } from 'react-redux';
import {
  Item,
  Button,
  ContactForm,
  ContactInfo,
  ContactInfoText,
} from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useState } from 'react';
import { UpdateContact } from 'components/UpdateContact/UpdateContact';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const handleUpdate = () => {
    setIsUpdate(true);
  };

  return (
    <Item>
      {isUpdate ? (
        <ContactForm>
          <UpdateContact
            id={id}
            initialValues={{ name, number }}
            onSubmit={() => setIsUpdate(false)}
          />
        </ContactForm>
      ) : (
        <>
          <ContactInfo>
            <ContactInfoText>{name}</ContactInfoText>
            <ContactInfoText>{number}</ContactInfoText>
          </ContactInfo>
          <div>
            <Button onClick={handleUpdate} type="button">
              Update
            </Button>
            <Button onClick={() => dispatch(deleteContact(id))} type="button">
              Delete
            </Button>
          </div>
        </>
      )}
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
