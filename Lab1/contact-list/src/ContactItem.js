import React from 'react';

class ContactItem extends React.Component {
    showInfo() {
        //console.log(this.props.shouldHide.hide);
        const info = {id: this.props.contact.id.toString(), hide: this.props.shouldHide.hide}
        this.props.showHideInfo(info);
    }

    showModal() {
        this.props.showModal(this.props.contact.id);
        var top = 120 + (this.props.contact.id - 1) * 55
        this.props.changeModalOff(top)
    }

    render() {
        var contact = this.props.contact;
        // console.log(this.props.shouldHide);
        return (
            <div className = "contactItem">
                <div className = "contactName" onClick = {this.showInfo.bind(this)}>
                    <p> {contact.name} </p>
                </div>
                <div className = {this.props.shouldHide.hide ? 'hidden' : ''} id = "fullInfo"
                    onClick = {this.showModal.bind(this)}>
                        <img src = {contact.picture} alt = "Contact Profile" />
                        <div className = "contactInfo">
                            <p className = "fullName"> {contact.name} </p>
                            <p className = "phoneEmail"> {contact.phone} </p>
                            <p className = "phoneEmail"> {contact.email} </p>
                        </div>
                </div>
            </div>
        );
    }
};

export default ContactItem;
