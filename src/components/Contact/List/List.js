import {useState} from 'react';

function List({contacts}) {
    const [filterText,setFilter] = useState("");

    
    const filtered = contacts.filter((item) =>{
            return Object.keys(item).some((key)=> 
                item[key].toString().toLowerCase()
                .includes(filterText.toLocaleLowerCase())
            );
    });
    
  console.log(filtered);
  return <div id='list-content'>
      <input 
      placeholder='Filter contact'
      onChange={(e)=> setFilter(e.target.value)}
      value={filterText}
      />

      <ul className='list'>
          {filtered.map((contact,i)=> 
          <li key={i}>
            <span>{contact.fullname}</span>  
            <span>{contact.phoneNumber}</span>  
          </li> 
          )}
      </ul>
  </div>;
}

export default List;
