import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contacts.map((contact) =>{
    return (
     <ContactCard contact={contact}/>
    )
  })
  return (
    <div className='container mt-5'>
      <div className="row">
        {renderContactList}
      </div>
    </div>
  )
}

export default ContactList