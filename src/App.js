import { useState } from 'react';
import './App.css';
import BackgroundAnimation from './backgroundAnimation';
import InputShortner from './inputShortner';
import LinkResult from './linkResult';

function App() {
  const [inputValue,setInputValue]=useState("");

  return (
    <div className="container">
      <InputShortner setInputValue={setInputValue}/>
      <BackgroundAnimation/>
      <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
