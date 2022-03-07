import { useState, useEffect } from 'react';

const initialFormValue = {fullname:"", phoneNumber: ''};


function Form({addContact, contacts}) {

   const [form, setForm] = useState(initialFormValue);

   useEffect(()=>{
    setForm( initialFormValue)
   },[contacts]);

   const onChangeInput = (e)=> {
       setForm({...form, [e.target.name]: e.target.value})
   };

   const onSubmit = (e)=>{
    e.preventDefault();

    if(form.fullname === "" || form.phoneNumber === "") {
        return false;
    }
    addContact([...contacts, form]);
   };

  return (
    <form onSubmit={onSubmit}>
      <div>
          <label htmlFor="fullname">FullName: </label>
          <input name = "fullname" placeholder='Fullname..' onChange={onChangeInput} value={form.fullname}/>
      </div>
      <div>
          <label htmlFor="phoneNumber">Phone number: </label>
          <input name = "phoneNumber" placeholder='Phone number..' onChange={onChangeInput} value={form.phoneNumber}/>
      </div>
      <div className='btn'>
      <button>Add</button>
      </div>
    </form>
  )
}

export default Form;
