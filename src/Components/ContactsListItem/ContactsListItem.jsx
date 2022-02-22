import { useDispatch } from "react-redux";
import {removeName} from '../../redux/contacts/contactsAction.js';

const ContactsListItem = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <>
      {filter.map((contact) => (
        <li key={contact.id}>
          <p>
            {contact.name}:{contact.number}
          </p>
          <button
            type="button"
            onClick={(e) => {
             dispatch(removeName(contact.name)) ;
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default ContactsListItem;
