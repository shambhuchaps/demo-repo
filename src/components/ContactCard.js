import React from 'react'

const ContactCard = (props) => {
  const { name, email } = props.contact;
  return (
    <div className='container'>
      <div className="row justify-content-between">
        
        <div className="col-md-8 d-flex">
          <div style={{fontSize:'2.5rem', marginRight:'2rem'}}><i className="bi bi-person-circle"></i></div>
          <div><h4>{name}</h4>
          <p>{email}</p></div>
          
        </div>
        <div className="col-md-2">
          <i className="bi bi-trash" style={{ color: 'red', marginTop: '7px', fontSize: '1.5rem', cursor: 'pointer' }}></i>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default ContactCard