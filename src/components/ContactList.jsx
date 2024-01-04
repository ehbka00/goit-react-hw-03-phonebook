import styles from '../css/contactList.module.css';

export const ContactList = ({ state, deleteContact }) => {
  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().startsWith(state.filter)
  );
  return (
    <ul className={styles.contact_list}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} data-key={contact.id}>
            {contact.name} : {contact.number}
            <button className={styles.btn} onClick={deleteContact}>
              Delete{' '}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
