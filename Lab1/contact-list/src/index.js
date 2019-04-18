import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contacts from './Contacts';
import registerServiceWorker from './registerServiceWorker';

var contacts = [{
  id: 1,
  name: 'Jon "Bones" Jones',
  phone: '8 777 910-53-32',
  email: 'jonbonesjones@gmail.com',
  picture: 'https://organicthemes.com/demo/profile/files/2012/12/profile_img.png'
}, {
    id: 2,
    name: 'Lionel Messi',
    phone: '8 777 910-53-32',
    email: 'jonbonesjones@gmail.com',
    picture: 'https://organicthemes.com/demo/profile/files/2012/12/profile_img.png'
}, {
    id: 3,
    name: 'Cristiano Ronaldo',
    phone: '8 777 910-53-32',
    email: 'jonbonesjones@gmail.com',
    picture: 'https://organicthemes.com/demo/profile/files/2012/12/profile_img.png'
}, {
    id: 4,
    name: 'Anthony Johnson',
    phone: '8 777 910-53-32',
    email: 'jonbonesjones@gmail.com',
    picture: 'https://organicthemes.com/demo/profile/files/2012/12/profile_img.png'
}];

ReactDOM.render(<Contacts contacts = {contacts}/>, document.getElementById('root'));
registerServiceWorker();
