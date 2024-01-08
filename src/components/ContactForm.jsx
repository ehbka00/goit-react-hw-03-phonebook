import { nanoid } from 'nanoid';
import { Component } from 'react';

import styles from '../css/contactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit({ name, number, id: nanoid() });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div>
          <div className={styles.form_name}>
            <label htmlFor={this.nameId}>Name</label>
            <input
              type="text"
              name="name"
              id={this.nameId}
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={styles.form_number}>
            <label htmlFor={this.numberId}>Number</label>
            <input
              type="text"
              name="number"
              id={this.numberId}
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}
