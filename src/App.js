import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const toogleMode = () =>{
    if (mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else {
      setMode  ('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
<Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
<div className="container my-3">
  <TextForm heading="Enter the text to analyze below"  mode={mode} />
</div>

{/* <About/> */}

    </>
  );
}

export default App;

