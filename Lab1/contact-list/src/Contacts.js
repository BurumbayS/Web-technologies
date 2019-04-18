import React, { Component } from 'react';
import './Contacts.css';
import Search from './Search'
import ContactList from './ContactList'

class Contacts extends Component {
    constructor (props) {
        super(props);
        this.state = {
            filterText: '',
            shouldHide: [],
            contacts: [],
            styles: {top: 120, left: 850},
            curId: 0
        }
    }

    updateFilter(value) {
        this.setState ({
            filterText: value
        });
        //console.log(this.state);
    }

    showHideInfo(info) {
        //console.log(info);
        const list = this.state.shouldHide.map((inf) => {
            if (inf.id == info.id) return {id: info.id, hide: !info.hide};
            else return inf;
        });

        this.setState({
            shouldHide: list
        });

        if (this.state.hideEdit == false) this.setState({ hideEdit: true });
    }

    componentWillMount(){
        var list = this.props.contacts.map((contact) => {
          return {id: contact.id.toString(), hide: true};
        });

        this.setState({
            shouldHide: list,
            hideEdit: true,
            contacts: this.props.contacts
        });
    }

    changeModalOffset(topOff) {
        // console.log(topOff);
        this.setState({
            styles: {top: topOff, left: 850}
        });
    }
    showModal(id) {
        const contact = this.state.contacts.filter(
            (contact) => {
                return contact.id.toString().indexOf(id.toString()) !== -1;
            }
        );

        this.refs.nameInput.value = contact[0].name;
        this.refs.phoneInput.value = contact[0].phone;
        this.refs.mailInput.value = contact[0].email;

        this.setState ({
            hideEdit: !this.state.hideEdit,
            curId: id
        });
    }

    changeInfo() {
        const name = this.refs.nameInput.value;
        const phone = this.refs.phoneInput.value;
        const mail = this.refs.mailInput.value;
        const list = this.state.contacts.map((contact) => {
            if (contact.id == this.state.curId)
            return {id: contact.id,
                    name: name,
                    phone: phone,
                    email: mail,
                    picture: contact.picture};
            else return contact;
        });

        this.setState({
            contacts: list,
            hideEdit: true
        });
    }

  render() {
    return (
      <div className = "App">
        <div className = "contactList">
            <div className = "header">
                <h2 className = "Title"> Contact list </h2>
                <Search
                    filterText = {this.state.filterText}
                    filterUpdate = {this.updateFilter.bind(this)}
                />
            </div>
            <ContactList
                contacts = {this.state.contacts}
                filterText = {this.state.filterText.toLowerCase()}
                shouldHide = {this.state.shouldHide}
                showHideInfo = {this.showHideInfo.bind(this)}
                showModal = {this.showModal.bind(this)}
                changeModalOff = {this.changeModalOffset.bind(this)}
            />
        </div>
        <div className = {this.state.hideEdit ? 'hidden' : 'editInfo'} style={this.state.styles}>
            <p>Name: </p>
            <input type = "text"
                ref = "nameInput"
            />
            <p>Phone: </p>
            <input type = "text"
                ref = "phoneInput"
            />
            <p>Mail: </p>
            <input type = "text"
                ref = "mailInput"
            />
            <button onClick = {this.changeInfo.bind(this)} >Edit</button>
        </div>
      </div>

    );
  }
}

export default Contacts;
