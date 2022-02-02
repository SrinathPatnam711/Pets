import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Pet from './components/Pet'

function App() {
  const [petlist, setPetlist] = useState([
    {
      Name: 'doggy',
      Type: 'type a',
      color: 'green',
      id: 1
    },
  
    {
      Name: 'Trex',
      Type: 'type b',
      color: 'purple',
      id: 2
    },
     
    {
      Name: 'fish',
      Type: 'type b',
      color: 'red',
      id: 3
    },

    {
      Name: 'cat',
      Type: 'type d',
      color: 'blue',
      id: 4
    },
  ]);

  const handleDeletepetlist = (id) => 
  {    
    setPetlist((prev) => prev.filter((p) => p.id !== id));
  };

  
  return (
    <div>
      <h3>Pets List</h3>
      {petlist.map((p) => (
        <Pet 
          id = {p.id} 
          Name={p.Name}
          Type={p.Type}
          Color={p.color}
          onDelete = {handleDeletepetlist}            
          key={p.id.toString()}     
        />
      ))}
    </div>
  );
}

export default App;
