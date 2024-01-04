import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactFilter = evt => {
    const filtesredStr = evt.target.value.toLowerCase();
    this.setState({ filter: filtesredStr });
  };

  addToLocalStorage = data => {
    window.localStorage.setItem('contacts', JSON.stringify(data));
  };

  addNewContact = newContact => {
    if (this.contactVerification(newContact.name)) {
      alert(newContact.name + ' is already in contacts.');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      this.setState({ contacts: contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const oldContacts = prevState.contacts;
    const currentContacts = this.state.contacts;

    if (oldContacts !== currentContacts) {
      localStorage.setItem('contacts', JSON.stringify(currentContacts));
    }
  }

  handleDeleteContact = evt => {
    const parentNode = evt.target.parentNode;
    const dataKey = parentNode.getAttribute('data-key');
    const newArray = this.state.contacts.filter(
      contact => contact.id !== dataKey
    );
    this.setState(() => {
      return { contacts: newArray };
    });
  };

  contactVerification = name => {
    const contactExists = this.state.contacts.some(
      contact => contact.name === name
    );
    if (contactExists) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <div>
        <div className="phonebook">
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addNewContact} />
        </div>

        <div className="contacts">
          <h2>Contacts</h2>
          <Filter contactFilter={this.contactFilter} />
          <ContactList
            state={this.state}
            deleteContact={this.handleDeleteContact}
          />
        </div>
      </div>
    );
  }
}
