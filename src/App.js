import { useState } from 'react';
import './App.css';
import data from './data';


function App() {

  const [holidays, setHolidays] = useState(data)

  return (
    <div className='main'>
      <div className='container'>
        <h3>Ulusal Tatil Günleri</h3>
        {holidays.map((holiday)=>{
          return(
              <div className='holiday' key={holiday.id}>
                <img src={holiday.img} alt='holidays'/>
                <div>
                  <p>{holiday.title}</p>  
                  <p>{holiday.date}</p>  
                </div>
                
              </div>
            )
        })}
        <button onClick={()=>setHolidays([])}>Sil</button>


      </div>
    
    </div>
  );
}

export default App;
