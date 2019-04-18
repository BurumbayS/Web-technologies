import React from 'react';
import ContactItem from './ContactItem'

class ContactList extends React.Component {
  render() {
    const filteredContacts = this.props.contacts.filter(
        (contact) => {
            return contact.name.toLowerCase().indexOf(this.props.filterText) !== -1;
        }
    );

    var items = filteredContacts.map((contact) => {
        const info = this.props.shouldHide.filter(
            (inf) => {
                return inf.id.indexOf(contact.id.toString()) !== -1;
            }
        );
        // console.log(info[0]);
      return <ContactItem key = { contact.id }
                contact = { contact }
                shouldHide = { info[0] }
                showHideInfo = {this.props.showHideInfo.bind(this)}
                showModal = {this.props.showModal.bind(this)}
                changeModalOff = {this.props.changeModalOff.bind(this)}
             />
    });
    return <div > {items} < /div>
  }
}

export default ContactList;
