import React,{useState} from 'react'

const AddContact = (props) => {
  const [registration, setregistration] = useState({
    name:'',
    email:'',
  });

  const haldleonChange = (e) =>{
    const name = e.target.name;
    setregistration({...registration, [name]: e.target.value});
  }
 
 const add = (e) =>{
     e.preventDefault();
    if(registration.name === '' || registration.email === ''){
      alert('All the fields are mandatory!');
      return;
    }
    props.addContactHandler(registration);
    setregistration({name:'',email:''});
    console.log(registration);
  }
  return (
    <div className='container'>
      <div className="row">
        <form onSubmit={add}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label fw-bolder">Name</label>
            <input 
            type="text" 
            className="form-control" 
            id="exampleInputName"
            name='name'
            value={registration.name} 
            onChange={haldleonChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bolder">Email address</label>
            <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" aria-describedby="emailHelp"
            name='email'
            value={registration.email} 
            onChange={haldleonChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddContact