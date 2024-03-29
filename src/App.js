import React, { useState } from 'react';

const App = () => {

  const [storeli,setli]= useState();
  const [items,setitems] = useState([]);

  const update= (event) => {
    var values=event.target.value;
    setli(values);
  }

  const display= () => {
    setitems((olditems)=>{
      return(
        [...olditems,storeli]
      );
    })
    setli('');
  }

  const deleteitems = (id) => {
    console.log('deleted');

    setitems((olditems)=>{
      return olditems.filter((arr,index)=>{
        return index!=id;
      })
      }
    )
  }

  return(
    <React.Fragment>
      <div className='main_div'>
        <div className='box'>
          <br/>
          <h1>To-Do List</h1>
          <br/>
            <input type='text' placeholder='Type here' onChange={update} value={storeli}/>
            <button onClick={display} className='bigb'>+</button>

            <ul>
              {items.map((val,index)=>{
                return (
                  <div className='small_div'>
                    <button className='smbtn' onClick={()=>{deleteitems(index)}}>-</button>
                    <li
                    key={index}
                    id='index'
                    >{val}</li>
                  </div>
                )
              })} 
            </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;