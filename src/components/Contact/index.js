import { useState,useEffect } from 'react';
import '../styles.css'

import List from './List/List'
import Form from './Form/Form'


function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: 'Aytac',
            phoneNumber:'0505432324'
        },
        {
            fullname: 'Yegane',
            phoneNumber:'0518832325'
        }
    ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts])

  return (
  <div id="container">
      <h1 className='title'>Contacts</h1>
      <List contacts={contacts}/> 
      <Form addContact = {setContacts} contacts ={contacts}/>
  </div>
  );
}

export default Contacts;

