import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

const [entries, setEntries] = useState([{weight: 175, date: '3-23-2022'}])

function addNewEntry(entry) {
  let tempEntries = [entry, ...entries];
  
  setEntries(tempEntries)
}

  return (
    <div>
   
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
      <DisplayEntries parentEntries={entries}/> 

    </div>
  );
}

export default App;
