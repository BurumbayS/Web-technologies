import React from 'react'
import './Main.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Todo from './Todo'
import Contacts from './Contacts'

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

const Main = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todo">ToDo List</Link></li>
        <li><Link to="/contacts">Contacts List</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/todo" component={ToDo}/>
      <Route path="/contacts" component={ContactList}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const ToDo = () => (
    <Todo/>
)

const ContactList = () => (
    // console.log(contacts)
    <Contacts contacts = {contacts}/>
)
export default Main;
